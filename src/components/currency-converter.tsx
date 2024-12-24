"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRightLeft } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";

const CURRENCIES = {
  USD: "United States Dollar",
  EUR: "Euro",
  GBP: "British Pound Sterling",
  JPY: "Japanese Yen",
  AUD: "Australian Dollar",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CNY: "Chinese Yuan",
  BRL: "Brazilian Real",
};

type ConversionHistory = {
  from: string;
  to: string;
  amount: number;
  result: number;
  timestamp: Date;
};

export function CurrencyConverter() {
  const { t } = useLanguage();
  const [amount, setAmount] = useState<string>("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<ConversionHistory[]>([]);
  const [rates, setRates] = useState<Record<string, number>>({});

  const fetchRates = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${process.env.NEXT_PUBLIC_CURRENCY_API_KEY}`
      );
      const data = await response.json();
      setRates(data.rates);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  }, []);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  const convert = useCallback(() => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || !rates[fromCurrency] || !rates[toCurrency]) return;

    const convertedAmount =
      (numAmount / rates[fromCurrency]) * rates[toCurrency];
    setResult(convertedAmount);

    const newHistory = {
      from: fromCurrency,
      to: toCurrency,
      amount: numAmount,
      result: convertedAmount,
      timestamp: new Date(),
    };

    setHistory((prev) => [newHistory, ...prev.slice(0, 4)]);
  }, [amount, fromCurrency, toCurrency, rates]);

  const switchCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    convert();
  }, [convert]);

  return (
    <div className="grid gap-8 md:grid-cols-2 auto-rows-fr overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="bg-gray-900/50 border-gray-800 overflow-hidden flex flex-col">
          <CardContent className="p-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm text-gray-400">{t("amount")}</label>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-gray-800 border-gray-700"
                  placeholder={t("enterAmount")}
                />
              </div>
              <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-end">
                <div className="grid gap-2">
                  <label className="text-sm text-gray-400">{t("from")}</label>
                  <Select value={fromCurrency} onValueChange={setFromCurrency}>
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(CURRENCIES).map(([code, name]) => (
                        <SelectItem key={code} value={code}>
                          {code} - {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={switchCurrencies}
                  className="mb-0.5"
                >
                  <ArrowRightLeft className="h-4 w-4" />
                </Button>
                <div className="grid gap-2">
                  <label className="text-sm text-gray-400">{t("to")}</label>
                  <Select value={toCurrency} onValueChange={setToCurrency}>
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(CURRENCIES).map(([code, name]) => (
                        <SelectItem key={code} value={code}>
                          {code} - {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {result !== null && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 p-4 bg-gray-800/50 rounded-lg"
                >
                  <div className="text-sm text-gray-400">{t("result")}</div>
                  <div className="text-2xl font-bold">
                    {result.toFixed(2)} {toCurrency}
                  </div>
                  <div className="text-sm text-gray-400">
                    1 {fromCurrency} ={" "}
                    {rates[fromCurrency] && rates[toCurrency]
                      ? (rates[toCurrency] / rates[fromCurrency]).toFixed(4)
                      : "..."}{" "}
                    {toCurrency}
                  </div>
                </motion.div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="bg-gray-900/50 border-gray-800 overflow-hidden flex flex-col">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              {t("conversionHistory")}
            </h3>
            <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              {history.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-3 bg-gray-800/50 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <div className="font-medium">
                      {item.amount} {item.from} → {item.result.toFixed(2)}{" "}
                      {item.to}
                    </div>
                    <div className="text-sm text-gray-400">
                      {item.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </motion.div>
              ))}
              {history.length === 0 && (
                <div className="text-gray-400 text-center py-8">
                  {t("noHistory")}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

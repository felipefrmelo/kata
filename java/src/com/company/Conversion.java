package com.company;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;

public class Conversion {

    Map<Integer, String> symbols = Map.of(1, "I", 5, "V", 10, "X",
            50, "L", 100, "C", 500, "D", 1000, "M");

    public String solution(int n) {

        if (n == 0) return "";

        String result = "";
        List<Integer> keys = symbols.keySet().stream().sorted((o1, o2) -> o2 - o1).collect(Collectors.toList());


        for (int i = 0; i < keys.size(); i++) {
            int key = keys.get(i);
            int range = n / key;
            int rest = n % key;

            if (0 < range && range <= 3) {
                for (int j = 0; j < range; j++) {
                    result += symbols.get(key);
                }
                return result + solution(rest);
            }
            if (range > 3) {
                return result + symbols.get(key) + symbols.get(keys.get(i - 1)) + solution(rest);
            }

            if (n > 5 && n >= key - keys.get(i + 2)) {
                if (Integer.toString(key).startsWith("1"))
                    return result + symbols.get(keys.get(i + 2)) + symbols.get(key) + solution(n % (key - keys.get(i + 2)));
            }
        }
        return "";
    }
}
public class Conversion {

    private final static TreeMap<Integer, String> ROMAN_NUMBERS_MAP = new TreeMap<Integer, String>(); // Must use TreeMap -> floorKey Method

    static {
        ROMAN_NUMBERS_MAP.put(1000, "M");
        ROMAN_NUMBERS_MAP.put(900, "CM");
        ROMAN_NUMBERS_MAP.put(500, "D");
        ROMAN_NUMBERS_MAP.put(400, "CD");
        ROMAN_NUMBERS_MAP.put(100, "C");
        ROMAN_NUMBERS_MAP.put(90, "XC");
        ROMAN_NUMBERS_MAP.put(50, "L");
        ROMAN_NUMBERS_MAP.put(40, "XL");
        ROMAN_NUMBERS_MAP.put(10, "X");
        ROMAN_NUMBERS_MAP.put(9, "IX");
        ROMAN_NUMBERS_MAP.put(5, "V");
        ROMAN_NUMBERS_MAP.put(4, "IV");
        ROMAN_NUMBERS_MAP.put(1, "I");
    }

    public static String solution(int number) {
        Integer key = ROMAN_NUMBERS_MAP.floorKey(number);
        if (key == null)
            return "No roman equivalent";

        if (number == key.intValue()) // Fits perfectly
            return ROMAN_NUMBERS_MAP.get(number);

        return ROMAN_NUMBERS_MAP.get(key) + solution(number - key); // Add rest recursively
    }
}
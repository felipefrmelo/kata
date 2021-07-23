(ns kata.meeting.core
  (:require [clojure.string :as str]))


(defn join [s, separator]
  (str/join separator s))

(defn wrap [s]
  (str "(" s ")"))

(defn handleName [s]
  (-> s (str/upper-case)
      (str/split #":")
      (reverse)
      (join  ", ")
      (wrap)))

(defn meeting [s]
  (-> (map handleName (str/split s #";"))
      (sort)
      (join "")))









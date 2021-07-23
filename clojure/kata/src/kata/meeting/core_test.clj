(ns kata.meeting.core-test
  (:require [clojure.test :refer [deftest testing is]]
            [kata.meeting.core :refer [meeting]]))

(deftest a-test
  (testing "should split a list of users"
    (is (= "(MELO, FELIPE)" (meeting "Felipe:Melo")))
    (is (= "(MELO, FELIPE)(NETO, ABEL)" (meeting "Abel:Neto;Felipe:Melo")))
    (is (= "(MELO, FELIPE)(TIAO, ZE)" (meeting "Ze:Tiao;Felipe:Melo")))
    (is (= "(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)"
           (meeting "John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell")) )))



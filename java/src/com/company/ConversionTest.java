package com.company;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ConversionTest {

    private Conversion conversion = new Conversion();

    @Test
    public void shouldConvertToRoman() {
        assertEquals("solution(1) should equal to I", "I", conversion.solution(1));
        assertEquals("solution(3) should equal to III", "III", conversion.solution(3));
        assertEquals("solution(8) should equal to VIII", "VIII", conversion.solution(8));
        assertEquals("solution(6) should equal to VI", "VI", conversion.solution(6));
       assertEquals("solution(12) should equal to XII", "XII", conversion.solution(12));
        assertEquals("solution(33) should equal to XXXIII", "XXXIII", conversion.solution(33));
        assertEquals("solution(4) should equal to IV", "IV", conversion.solution(4));
        assertEquals("solution(46) should equal to XLVI", "XLVI", conversion.solution(46));
        assertEquals("solution(44) should equal to XLIV", "XLIV", conversion.solution(44));
        assertEquals("solution(9) should equal to IX", "IX", conversion.solution(9));

        assertEquals("solution(96) should equal to XCVI", "XCVI", conversion.solution(96));
        assertEquals("solution(94) should equal to XCIV", "XCIV", conversion.solution(94));

        assertEquals("solution(1444) should equal to MCDXLIV", "MCDXLIV", conversion.solution(1444));
    }
}

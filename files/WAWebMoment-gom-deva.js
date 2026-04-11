__d(
  "WAWebMoment-gom-deva",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var o = {
        s: [
          "\u0925\u094B\u0921\u092F\u093E \u0938\u0945\u0915\u0902\u0921\u093E\u0902\u0928\u0940",
          "\u0925\u094B\u0921\u0947 \u0938\u0945\u0915\u0902\u0921",
        ],
        ss: [
          e + " \u0938\u0945\u0915\u0902\u0921\u093E\u0902\u0928\u0940",
          e + " \u0938\u0945\u0915\u0902\u0921",
        ],
        m: [
          "\u090F\u0915\u093E \u092E\u093F\u0923\u091F\u093E\u0928",
          "\u090F\u0915 \u092E\u093F\u0928\u0942\u091F",
        ],
        mm: [
          e + " \u092E\u093F\u0923\u091F\u093E\u0902\u0928\u0940",
          e + " \u092E\u093F\u0923\u091F\u093E\u0902",
        ],
        h: [
          "\u090F\u0915\u093E \u0935\u0930\u093E\u0928",
          "\u090F\u0915 \u0935\u0930",
        ],
        hh: [
          e + " \u0935\u0930\u093E\u0902\u0928\u0940",
          e + " \u0935\u0930\u093E\u0902",
        ],
        d: [
          "\u090F\u0915\u093E \u0926\u093F\u0938\u093E\u0928",
          "\u090F\u0915 \u0926\u0940\u0938",
        ],
        dd: [
          e + " \u0926\u093F\u0938\u093E\u0902\u0928\u0940",
          e + " \u0926\u0940\u0938",
        ],
        M: [
          "\u090F\u0915\u093E \u092E\u094D\u0939\u092F\u0928\u094D\u092F\u093E\u0928",
          "\u090F\u0915 \u092E\u094D\u0939\u092F\u0928\u094B",
        ],
        MM: [
          e + " \u092E\u094D\u0939\u092F\u0928\u094D\u092F\u093E\u0928\u0940",
          e + " \u092E\u094D\u0939\u092F\u0928\u0947",
        ],
        y: [
          "\u090F\u0915\u093E \u0935\u0930\u094D\u0938\u093E\u0928",
          "\u090F\u0915 \u0935\u0930\u094D\u0938",
        ],
        yy: [
          e + " \u0935\u0930\u094D\u0938\u093E\u0902\u0928\u0940",
          e + " \u0935\u0930\u094D\u0938\u093E\u0902",
        ],
      };
      return r ? o[n][0] : o[n][1];
    }
    var s = r("WAWeb-moment").defineLocale("gom-deva", {
      months: {
        standalone:
          "\u091C\u093E\u0928\u0947\u0935\u093E\u0930\u0940_\u092B\u0947\u092C\u094D\u0930\u0941\u0935\u093E\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u090F\u092A\u094D\u0930\u0940\u0932_\u092E\u0947_\u091C\u0942\u0928_\u091C\u0941\u0932\u092F_\u0911\u0917\u0938\u094D\u091F_\u0938\u092A\u094D\u091F\u0947\u0902\u092C\u0930_\u0911\u0915\u094D\u091F\u094B\u092C\u0930_\u0928\u094B\u0935\u094D\u0939\u0947\u0902\u092C\u0930_\u0921\u093F\u0938\u0947\u0902\u092C\u0930".split(
            "_",
          ),
        format:
          "\u091C\u093E\u0928\u0947\u0935\u093E\u0930\u0940\u091A\u094D\u092F\u093E_\u092B\u0947\u092C\u094D\u0930\u0941\u0935\u093E\u0930\u0940\u091A\u094D\u092F\u093E_\u092E\u093E\u0930\u094D\u091A\u093E\u091A\u094D\u092F\u093E_\u090F\u092A\u094D\u0930\u0940\u0932\u093E\u091A\u094D\u092F\u093E_\u092E\u0947\u092F\u093E\u091A\u094D\u092F\u093E_\u091C\u0942\u0928\u093E\u091A\u094D\u092F\u093E_\u091C\u0941\u0932\u092F\u093E\u091A\u094D\u092F\u093E_\u0911\u0917\u0938\u094D\u091F\u093E\u091A\u094D\u092F\u093E_\u0938\u092A\u094D\u091F\u0947\u0902\u092C\u0930\u093E\u091A\u094D\u092F\u093E_\u0911\u0915\u094D\u091F\u094B\u092C\u0930\u093E\u091A\u094D\u092F\u093E_\u0928\u094B\u0935\u094D\u0939\u0947\u0902\u092C\u0930\u093E\u091A\u094D\u092F\u093E_\u0921\u093F\u0938\u0947\u0902\u092C\u0930\u093E\u091A\u094D\u092F\u093E".split(
            "_",
          ),
        isFormat: /MMMM(\s)+D[oD]?/,
      },
      monthsShort:
        "\u091C\u093E\u0928\u0947._\u092B\u0947\u092C\u094D\u0930\u0941._\u092E\u093E\u0930\u094D\u091A_\u090F\u092A\u094D\u0930\u0940._\u092E\u0947_\u091C\u0942\u0928_\u091C\u0941\u0932._\u0911\u0917._\u0938\u092A\u094D\u091F\u0947\u0902._\u0911\u0915\u094D\u091F\u094B._\u0928\u094B\u0935\u094D\u0939\u0947\u0902._\u0921\u093F\u0938\u0947\u0902.".split(
          "_",
        ),
      monthsParseExact: !0,
      weekdays:
        "\u0906\u092F\u0924\u093E\u0930_\u0938\u094B\u092E\u093E\u0930_\u092E\u0902\u0917\u0933\u093E\u0930_\u092C\u0941\u0927\u0935\u093E\u0930_\u092C\u093F\u0930\u0947\u0938\u094D\u0924\u093E\u0930_\u0938\u0941\u0915\u094D\u0930\u093E\u0930_\u0936\u0947\u0928\u0935\u093E\u0930".split(
          "_",
        ),
      weekdaysShort:
        "\u0906\u092F\u0924._\u0938\u094B\u092E._\u092E\u0902\u0917\u0933._\u092C\u0941\u0927._\u092C\u094D\u0930\u0947\u0938\u094D\u0924._\u0938\u0941\u0915\u094D\u0930._\u0936\u0947\u0928.".split(
          "_",
        ),
      weekdaysMin:
        "\u0906_\u0938\u094B_\u092E\u0902_\u092C\u0941_\u092C\u094D\u0930\u0947_\u0938\u0941_\u0936\u0947".split(
          "_",
        ),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "A h:mm [\u0935\u093E\u091C\u0924\u093E\u0902]",
        LTS: "A h:mm:ss [\u0935\u093E\u091C\u0924\u093E\u0902]",
        L: "DD-MM-YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY A h:mm [\u0935\u093E\u091C\u0924\u093E\u0902]",
        LLLL: "dddd, MMMM Do, YYYY, A h:mm [\u0935\u093E\u091C\u0924\u093E\u0902]",
        llll: "ddd, D MMM YYYY, A h:mm [\u0935\u093E\u091C\u0924\u093E\u0902]",
      },
      calendar: {
        sameDay: "[\u0906\u092F\u091C] LT",
        nextDay: "[\u092B\u093E\u0932\u094D\u092F\u093E\u0902] LT",
        nextWeek: "[\u092B\u0941\u0921\u0932\u094B] dddd[,] LT",
        lastDay: "[\u0915\u093E\u0932] LT",
        lastWeek: "[\u092B\u093E\u091F\u0932\u094B] dddd[,] LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "%s",
        past: "%s \u0906\u0926\u0940\u0902",
        s: e,
        ss: e,
        m: e,
        mm: e,
        h: e,
        hh: e,
        d: e,
        dd: e,
        M: e,
        MM: e,
        y: e,
        yy: e,
      },
      dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
      ordinal: function (t, n) {
        switch (n) {
          case "D":
            return t + "\u0935\u0947\u0930";
          default:
          case "M":
          case "Q":
          case "DDD":
          case "d":
          case "w":
          case "W":
            return t;
        }
      },
      week: { dow: 0, doy: 3 },
      meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
      meridiemHour: function (t, n) {
        if ((t === 12 && (t = 0), n === "\u0930\u093E\u0924\u0940"))
          return t < 4 ? t : t + 12;
        if (n === "\u0938\u0915\u093E\u0933\u0940\u0902") return t;
        if (n === "\u0926\u0928\u092A\u093E\u0930\u093E\u0902")
          return t > 12 ? t : t + 12;
        if (n === "\u0938\u093E\u0902\u091C\u0947") return t + 12;
      },
      meridiem: function (t, n, r) {
        return t < 4
          ? "\u0930\u093E\u0924\u0940"
          : t < 12
            ? "\u0938\u0915\u093E\u0933\u0940\u0902"
            : t < 16
              ? "\u0926\u0928\u092A\u093E\u0930\u093E\u0902"
              : t < 20
                ? "\u0938\u093E\u0902\u091C\u0947"
                : "\u0930\u093E\u0924\u0940";
      },
    });
  },
  34,
);

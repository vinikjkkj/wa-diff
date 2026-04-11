__d(
  "WAWebMoment-mr",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = {
        1: "\u0967",
        2: "\u0968",
        3: "\u0969",
        4: "\u096A",
        5: "\u096B",
        6: "\u096C",
        7: "\u096D",
        8: "\u096E",
        9: "\u096F",
        0: "\u0966",
      },
      s = {
        "\u0967": "1",
        "\u0968": "2",
        "\u0969": "3",
        "\u096A": "4",
        "\u096B": "5",
        "\u096C": "6",
        "\u096D": "7",
        "\u096E": "8",
        "\u096F": "9",
        "\u0966": "0",
      };
    function u(e, t, n, r) {
      var o = "";
      if (t)
        switch (n) {
          case "s":
            o = "\u0915\u093E\u0939\u0940 \u0938\u0947\u0915\u0902\u0926";
            break;
          case "ss":
            o = "%d \u0938\u0947\u0915\u0902\u0926";
            break;
          case "m":
            o = "\u090F\u0915 \u092E\u093F\u0928\u093F\u091F";
            break;
          case "mm":
            o = "%d \u092E\u093F\u0928\u093F\u091F\u0947";
            break;
          case "h":
            o = "\u090F\u0915 \u0924\u093E\u0938";
            break;
          case "hh":
            o = "%d \u0924\u093E\u0938";
            break;
          case "d":
            o = "\u090F\u0915 \u0926\u093F\u0935\u0938";
            break;
          case "dd":
            o = "%d \u0926\u093F\u0935\u0938";
            break;
          case "M":
            o = "\u090F\u0915 \u092E\u0939\u093F\u0928\u093E";
            break;
          case "MM":
            o = "%d \u092E\u0939\u093F\u0928\u0947";
            break;
          case "y":
            o = "\u090F\u0915 \u0935\u0930\u094D\u0937";
            break;
          case "yy":
            o = "%d \u0935\u0930\u094D\u0937\u0947";
            break;
        }
      else
        switch (n) {
          case "s":
            o =
              "\u0915\u093E\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093E\u0902";
            break;
          case "ss":
            o = "%d \u0938\u0947\u0915\u0902\u0926\u093E\u0902";
            break;
          case "m":
            o = "\u090F\u0915\u093E \u092E\u093F\u0928\u093F\u091F\u093E";
            break;
          case "mm":
            o = "%d \u092E\u093F\u0928\u093F\u091F\u093E\u0902";
            break;
          case "h":
            o = "\u090F\u0915\u093E \u0924\u093E\u0938\u093E";
            break;
          case "hh":
            o = "%d \u0924\u093E\u0938\u093E\u0902";
            break;
          case "d":
            o = "\u090F\u0915\u093E \u0926\u093F\u0935\u0938\u093E";
            break;
          case "dd":
            o = "%d \u0926\u093F\u0935\u0938\u093E\u0902";
            break;
          case "M":
            o = "\u090F\u0915\u093E \u092E\u0939\u093F\u0928\u094D\u092F\u093E";
            break;
          case "MM":
            o = "%d \u092E\u0939\u093F\u0928\u094D\u092F\u093E\u0902";
            break;
          case "y":
            o = "\u090F\u0915\u093E \u0935\u0930\u094D\u0937\u093E";
            break;
          case "yy":
            o = "%d \u0935\u0930\u094D\u0937\u093E\u0902";
            break;
        }
      return o.replace(/%d/i, e);
    }
    var c = r("WAWeb-moment").defineLocale("mr", {
      months:
        "\u091C\u093E\u0928\u0947\u0935\u093E\u0930\u0940_\u092B\u0947\u092C\u094D\u0930\u0941\u0935\u093E\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u090F\u092A\u094D\u0930\u093F\u0932_\u092E\u0947_\u091C\u0942\u0928_\u091C\u0941\u0932\u0948_\u0911\u0917\u0938\u094D\u091F_\u0938\u092A\u094D\u091F\u0947\u0902\u092C\u0930_\u0911\u0915\u094D\u091F\u094B\u092C\u0930_\u0928\u094B\u0935\u094D\u0939\u0947\u0902\u092C\u0930_\u0921\u093F\u0938\u0947\u0902\u092C\u0930".split(
          "_",
        ),
      monthsShort:
        "\u091C\u093E\u0928\u0947._\u092B\u0947\u092C\u094D\u0930\u0941._\u092E\u093E\u0930\u094D\u091A._\u090F\u092A\u094D\u0930\u093F._\u092E\u0947._\u091C\u0942\u0928._\u091C\u0941\u0932\u0948._\u0911\u0917._\u0938\u092A\u094D\u091F\u0947\u0902._\u0911\u0915\u094D\u091F\u094B._\u0928\u094B\u0935\u094D\u0939\u0947\u0902._\u0921\u093F\u0938\u0947\u0902.".split(
          "_",
        ),
      monthsParseExact: !0,
      weekdays:
        "\u0930\u0935\u093F\u0935\u093E\u0930_\u0938\u094B\u092E\u0935\u093E\u0930_\u092E\u0902\u0917\u0933\u0935\u093E\u0930_\u092C\u0941\u0927\u0935\u093E\u0930_\u0917\u0941\u0930\u0942\u0935\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930_\u0936\u0928\u093F\u0935\u093E\u0930".split(
          "_",
        ),
      weekdaysShort:
        "\u0930\u0935\u093F_\u0938\u094B\u092E_\u092E\u0902\u0917\u0933_\u092C\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094D\u0930_\u0936\u0928\u093F".split(
          "_",
        ),
      weekdaysMin:
        "\u0930_\u0938\u094B_\u092E\u0902_\u092C\u0941_\u0917\u0941_\u0936\u0941_\u0936".split(
          "_",
        ),
      longDateFormat: {
        LT: "A h:mm \u0935\u093E\u091C\u0924\u093E",
        LTS: "A h:mm:ss \u0935\u093E\u091C\u0924\u093E",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm \u0935\u093E\u091C\u0924\u093E",
        LLLL: "dddd, D MMMM YYYY, A h:mm \u0935\u093E\u091C\u0924\u093E",
      },
      calendar: {
        sameDay: "[\u0906\u091C] LT",
        nextDay: "[\u0909\u0926\u094D\u092F\u093E] LT",
        nextWeek: "dddd, LT",
        lastDay: "[\u0915\u093E\u0932] LT",
        lastWeek: "[\u092E\u093E\u0917\u0940\u0932] dddd, LT",
        sameElse: "L",
      },
      relativeTime: {
        future: "%s\u092E\u0927\u094D\u092F\u0947",
        past: "%s\u092A\u0942\u0930\u094D\u0935\u0940",
        s: u,
        ss: u,
        m: u,
        mm: u,
        h: u,
        hh: u,
        d: u,
        dd: u,
        M: u,
        MM: u,
        y: u,
        yy: u,
      },
      preparse: function (t) {
        return t.replace(/[१२३४५६७८९०]/g, function (e) {
          return s[e];
        });
      },
      postformat: function (n) {
        return n.replace(/\d/g, function (t) {
          return e[t];
        });
      },
      meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
      meridiemHour: function (t, n) {
        if (
          (t === 12 && (t = 0),
          n === "\u092A\u0939\u093E\u091F\u0947" ||
            n === "\u0938\u0915\u093E\u0933\u0940")
        )
          return t;
        if (
          n === "\u0926\u0941\u092A\u093E\u0930\u0940" ||
          n === "\u0938\u093E\u092F\u0902\u0915\u093E\u0933\u0940" ||
          n === "\u0930\u093E\u0924\u094D\u0930\u0940"
        )
          return t >= 12 ? t : t + 12;
      },
      meridiem: function (t, n, r) {
        return t >= 0 && t < 6
          ? "\u092A\u0939\u093E\u091F\u0947"
          : t < 12
            ? "\u0938\u0915\u093E\u0933\u0940"
            : t < 17
              ? "\u0926\u0941\u092A\u093E\u0930\u0940"
              : t < 20
                ? "\u0938\u093E\u092F\u0902\u0915\u093E\u0933\u0940"
                : "\u0930\u093E\u0924\u094D\u0930\u0940";
      },
      week: { dow: 0, doy: 6 },
    });
  },
  34,
);

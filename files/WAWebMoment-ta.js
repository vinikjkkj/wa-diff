__d(
  "WAWebMoment-ta",
  ["WAWeb-moment"],
  function (t, n, r, o, a, i, l) {
    var e = {
        1: "\u0BE7",
        2: "\u0BE8",
        3: "\u0BE9",
        4: "\u0BEA",
        5: "\u0BEB",
        6: "\u0BEC",
        7: "\u0BED",
        8: "\u0BEE",
        9: "\u0BEF",
        0: "\u0BE6",
      },
      s = {
        "\u0BE7": "1",
        "\u0BE8": "2",
        "\u0BE9": "3",
        "\u0BEA": "4",
        "\u0BEB": "5",
        "\u0BEC": "6",
        "\u0BED": "7",
        "\u0BEE": "8",
        "\u0BEF": "9",
        "\u0BE6": "0",
      },
      u = r("WAWeb-moment").defineLocale("ta", {
        months:
          "\u0B9C\u0BA9\u0BB5\u0BB0\u0BBF_\u0BAA\u0BBF\u0BAA\u0BCD\u0BB0\u0BB5\u0BB0\u0BBF_\u0BAE\u0BBE\u0BB0\u0BCD\u0B9A\u0BCD_\u0B8F\u0BAA\u0BCD\u0BB0\u0BB2\u0BCD_\u0BAE\u0BC7_\u0B9C\u0BC2\u0BA9\u0BCD_\u0B9C\u0BC2\u0BB2\u0BC8_\u0B86\u0B95\u0BB8\u0BCD\u0B9F\u0BCD_\u0B9A\u0BC6\u0BAA\u0BCD\u0B9F\u0BC6\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD_\u0B85\u0B95\u0BCD\u0B9F\u0BC7\u0BBE\u0BAA\u0BB0\u0BCD_\u0BA8\u0BB5\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD_\u0B9F\u0BBF\u0B9A\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD".split(
            "_",
          ),
        monthsShort:
          "\u0B9C\u0BA9\u0BB5\u0BB0\u0BBF_\u0BAA\u0BBF\u0BAA\u0BCD\u0BB0\u0BB5\u0BB0\u0BBF_\u0BAE\u0BBE\u0BB0\u0BCD\u0B9A\u0BCD_\u0B8F\u0BAA\u0BCD\u0BB0\u0BB2\u0BCD_\u0BAE\u0BC7_\u0B9C\u0BC2\u0BA9\u0BCD_\u0B9C\u0BC2\u0BB2\u0BC8_\u0B86\u0B95\u0BB8\u0BCD\u0B9F\u0BCD_\u0B9A\u0BC6\u0BAA\u0BCD\u0B9F\u0BC6\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD_\u0B85\u0B95\u0BCD\u0B9F\u0BC7\u0BBE\u0BAA\u0BB0\u0BCD_\u0BA8\u0BB5\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD_\u0B9F\u0BBF\u0B9A\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD".split(
            "_",
          ),
        weekdays:
          "\u0B9E\u0BBE\u0BAF\u0BBF\u0BB1\u0BCD\u0BB1\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0BA4\u0BBF\u0B99\u0BCD\u0B95\u0B9F\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0B9A\u0BC6\u0BB5\u0BCD\u0BB5\u0BBE\u0BAF\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0BAA\u0BC1\u0BA4\u0BA9\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0BB5\u0BBF\u0BAF\u0BBE\u0BB4\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0BB5\u0BC6\u0BB3\u0BCD\u0BB3\u0BBF\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8_\u0B9A\u0BA9\u0BBF\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8".split(
            "_",
          ),
        weekdaysShort:
          "\u0B9E\u0BBE\u0BAF\u0BBF\u0BB1\u0BC1_\u0BA4\u0BBF\u0B99\u0BCD\u0B95\u0BB3\u0BCD_\u0B9A\u0BC6\u0BB5\u0BCD\u0BB5\u0BBE\u0BAF\u0BCD_\u0BAA\u0BC1\u0BA4\u0BA9\u0BCD_\u0BB5\u0BBF\u0BAF\u0BBE\u0BB4\u0BA9\u0BCD_\u0BB5\u0BC6\u0BB3\u0BCD\u0BB3\u0BBF_\u0B9A\u0BA9\u0BBF".split(
            "_",
          ),
        weekdaysMin:
          "\u0B9E\u0BBE_\u0BA4\u0BBF_\u0B9A\u0BC6_\u0BAA\u0BC1_\u0BB5\u0BBF_\u0BB5\u0BC6_\u0B9A".split(
            "_",
          ),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, HH:mm",
          LLLL: "dddd, D MMMM YYYY, HH:mm",
        },
        calendar: {
          sameDay: "[\u0B87\u0BA9\u0BCD\u0BB1\u0BC1] LT",
          nextDay: "[\u0BA8\u0BBE\u0BB3\u0BC8] LT",
          nextWeek: "dddd, LT",
          lastDay: "[\u0BA8\u0BC7\u0BB1\u0BCD\u0BB1\u0BC1] LT",
          lastWeek:
            "[\u0B95\u0B9F\u0BA8\u0BCD\u0BA4 \u0BB5\u0BBE\u0BB0\u0BAE\u0BCD] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s \u0B87\u0BB2\u0BCD",
          past: "%s \u0BAE\u0BC1\u0BA9\u0BCD",
          s: "\u0B92\u0BB0\u0BC1 \u0B9A\u0BBF\u0BB2 \u0BB5\u0BBF\u0BA8\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BCD",
          ss: "%d \u0BB5\u0BBF\u0BA8\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BCD",
          m: "\u0B92\u0BB0\u0BC1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BAE\u0BCD",
          mm: "%d \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
          h: "\u0B92\u0BB0\u0BC1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
          hh: "%d \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
          d: "\u0B92\u0BB0\u0BC1 \u0BA8\u0BBE\u0BB3\u0BCD",
          dd: "%d \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BCD",
          M: "\u0B92\u0BB0\u0BC1 \u0BAE\u0BBE\u0BA4\u0BAE\u0BCD",
          MM: "%d \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
          y: "\u0B92\u0BB0\u0BC1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD",
          yy: "%d \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal: function (t) {
          return t + "\u0BB5\u0BA4\u0BC1";
        },
        preparse: function (t) {
          return t.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
            return s[e];
          });
        },
        postformat: function (n) {
          return n.replace(/\d/g, function (t) {
            return e[t];
          });
        },
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function (t, n, r) {
          return t < 2
            ? " \u0BAF\u0BBE\u0BAE\u0BAE\u0BCD"
            : t < 6
              ? " \u0BB5\u0BC8\u0B95\u0BB1\u0BC8"
              : t < 10
                ? " \u0B95\u0BBE\u0BB2\u0BC8"
                : t < 14
                  ? " \u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD"
                  : t < 18
                    ? " \u0B8E\u0BB1\u0BCD\u0BAA\u0BBE\u0B9F\u0BC1"
                    : t < 22
                      ? " \u0BAE\u0BBE\u0BB2\u0BC8"
                      : " \u0BAF\u0BBE\u0BAE\u0BAE\u0BCD";
        },
        meridiemHour: function (t, n) {
          return (
            t === 12 && (t = 0),
            n === "\u0BAF\u0BBE\u0BAE\u0BAE\u0BCD"
              ? t < 2
                ? t
                : t + 12
              : n === "\u0BB5\u0BC8\u0B95\u0BB1\u0BC8" ||
                  n === "\u0B95\u0BBE\u0BB2\u0BC8" ||
                  (n === "\u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD" &&
                    t >= 10)
                ? t
                : t + 12
          );
        },
        week: { dow: 0, doy: 6 },
      });
  },
  34,
);

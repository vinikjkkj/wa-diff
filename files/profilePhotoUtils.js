__d(
  "profilePhotoUtils",
  ["MetaConfig", "memoizeWithArgs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoizeWithArgs")(
        function (e, t) {
          if (t === "none") return 0;
          var n = t === "seen" && r("MetaConfig")._("73");
          switch (e) {
            case 24:
            case 32:
            case 36:
            case 40:
              return n ? 1 : 2;
            case 48:
            case 56:
            case 60:
              return n ? 1.5 : 3;
            case 132:
            default:
              return n ? 2 : 4;
          }
        },
        function (e, t) {
          return "" + (t != null ? t : "") + String(e);
        },
      ),
      s = r("memoizeWithArgs")(
        function (e, t) {
          if (t === "availabilityBadge")
            switch (e) {
              case 10:
              case 16:
              case 20:
              case 24:
                return [6, 1.5];
              case 28:
                return [7, 2];
              case 32:
              case 36:
                return [8, 2];
              case 40:
              case 44:
              case 48:
                return [9, 2];
              case 52:
              case 56:
              case 60:
                return [10, 2];
              case 72:
                return [12, 2];
              case 80:
              case 88:
                return [14, 2];
              case 96:
              case 100:
              case 112:
                return [15, 2];
              case 120:
              case 132:
              case 168:
                return [20, 4];
              default:
                return [8, 2];
            }
          switch (e) {
            case 10:
            case 16:
            case 20:
            case 24:
              return [6, 1.5];
            case 28:
              return [7, 1.5];
            case 32:
              return [8, 2];
            case 36:
              return [9, 2];
            case 40:
              return [10, 2];
            case 44:
            case 48:
              return [12, 2];
            case 52:
            case 56:
              return [14, 2];
            case 60:
              return [15, 2];
            case 72:
              return [18, 2];
            case 80:
              return [20, 4];
            case 88:
              return [22, 4];
            case 96:
            case 100:
            case 112:
              return [24, 4];
            case 120:
            case 132:
              return [32, 4];
            case 168:
              return [41, 4];
            default:
              return [8, 2];
          }
        },
        function (e, t) {
          return String(e) + t;
        },
      );
    ((l.getStoryRingSize = e), (l.getBadgeSizeAndStrokeWidth = s));
  },
  98,
);

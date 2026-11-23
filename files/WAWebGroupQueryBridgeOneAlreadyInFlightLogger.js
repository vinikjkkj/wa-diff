__d(
  "WAWebGroupQueryBridgeOneAlreadyInFlightLogger",
  ["WALogger", "WAWebWamEnumMismatchOriginType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Object.fromEntries(
        Object.entries(
          o("WAWebWamEnumMismatchOriginType").MISMATCH_ORIGIN_TYPE,
        ).map(function (e) {
          var t = e[0],
            n = e[1];
          return [n, t];
        }),
      ),
      u = (function () {
        function e() {
          this.$1 = new Map();
        }
        var t = e.prototype;
        return (
          (t.$2 = function (t) {
            var e;
            return (e = this.$1.get(t)) != null ? e : 0;
          }),
          (t.increment = function (t) {
            var e = t.toString(),
              n = this.$2(e) + 1;
            return (this.$1.set(e, n), n);
          }),
          (t.decrement = function (t) {
            var e = t.toString();
            this.$1.set(e, Math.max(this.$2(e) - 1, 0));
          }),
          e
        );
      })();
    function c(t) {
      var n = new u();
      return async function (a, i) {
        n.increment(a) > 1 &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "lid_migration - ",
                  "",
                ])),
              s[i],
            )
            .sendLogs("GroupLidInfra/one_in_flight_group_info_mismatch");
        try {
          var r = await t(a);
          return (n.decrement(a), r);
        } catch (e) {
          throw (n.decrement(a), e);
        }
      };
    }
    l.logDuplicateRequestsWrapper = c;
  },
  98,
);

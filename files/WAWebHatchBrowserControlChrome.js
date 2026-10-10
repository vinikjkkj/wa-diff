__d(
  "WAWebHatchBrowserControlChrome",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Object.freeze({
      action: null,
      isActionEnabled: !1,
      isInputEnabled: !1,
      notice: null,
      offersStop: !1,
    });
    function l(t, n) {
      return !n && t.kind !== "driving"
        ? e
        : t.kind === "watching"
          ? u("takeControl", !0, null)
          : t.kind === "requesting"
            ? u("takingControl", !1, null)
            : t.kind === "driving"
              ? s(n)
              : t.kind === "heldByOther"
                ? u("takeControl", !0, "heldByOther")
                : t.kind === "notControllable"
                  ? u(null, !1, "notControllable")
                  : t.kind === "expired"
                    ? u("takeControl", !0, "expired")
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            t.kind,
                        );
                      })();
    }
    function s(e) {
      return babelHelpers.extends({}, u("returnControl", !0, null), {
        isInputEnabled: e,
      });
    }
    function u(e, t, n) {
      return {
        action: e,
        isActionEnabled: t,
        isInputEnabled: !1,
        notice: n,
        offersStop: !0,
      };
    }
    ((i.HIDDEN_BROWSER_CONTROL_CHROME = e), (i.browserControlChrome = l));
  },
  66,
);

__d(
  "getMAIBABusinessSetupFinishBlockedMessage",
  ["fbt", "BizKitBusinessCreationErrorStrings", "intlList"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = { description: "", title: "" };
    function u(t) {
      var n,
        r,
        a = o("BizKitBusinessCreationErrorStrings").getErrorMessageByErrorCode(
          t.errorCode,
          e,
        );
      if (a !== e) return a.description;
      var i = t.errorMessage,
        l =
          i == null
            ? ""
            : (n =
                  (r = new DOMParser().parseFromString(i, "text/html").body) ==
                    null || (r = r.textContent) == null
                    ? void 0
                    : r.trim()) != null
              ? n
              : "";
      return l !== ""
        ? l
        : o("BizKitBusinessCreationErrorStrings").getErrorMessageByErrorCode(
            t.errorCode,
          ).description;
    }
    function c(e) {
      return (function (e) {
        if (e === "ad_account") return s._(/*BTDS*/ "");
        if (e === "page_category") return s._(/*BTDS*/ "");
        if (e === "profiles") return s._(/*BTDS*/ "");
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "reason" in e
        ) {
          var t = e.reason;
          return t;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "serverError" in e
        ) {
          var n = e.serverError;
          return u(n);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function d(e) {
      return e === "ad_account"
        ? s._(/*BTDS*/ "")
        : e === "page_category"
          ? s._(/*BTDS*/ "")
          : e === "profiles"
            ? s._(/*BTDS*/ "")
            : (((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                  "reason" in e) ||
                (((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                  "serverError" in e)
              ? c(e)
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function m(e) {
      return e.length === 0
        ? null
        : e.length === 1
          ? c(e[0])
          : s._(/*BTDS*/ "", [
              s._param(
                "steps",
                r("intlList")(
                  e.map(d),
                  r("intlList").CONJUNCTIONS.NONE,
                  r("intlList").DELIMITERS.BULLET,
                ),
              ),
            ]);
    }
    l.default = m;
  },
  226,
);

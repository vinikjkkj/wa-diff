__d(
  "WAWebBizAiResponseSettingsV2Labels",
  ["fbt", "WAWebBizAiResponseSettingsV2Model", "err"],
  function (t, n, r, o, a, i, l, s) {
    var e = 0x4b645b3cace4e;
    function u(e) {
      return e === "CONTACTS"
        ? s._(/*BTDS*/ "")
        : e === "ADS"
          ? s._(/*BTDS*/ "")
          : e === "ALL"
            ? s._(/*BTDS*/ "")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function c(e) {
      var t = o("WAWebBizAiResponseSettingsV2Model").getMode(e, "CONTACTS"),
        n = o("WAWebBizAiResponseSettingsV2Model").getMode(e, "ADS"),
        a = o("WAWebBizAiResponseSettingsV2Model").getMode(e, "ALL");
      if (t == null || n == null || a == null)
        throw r("err")(
          "response settings v2 status summary is missing an audience mode",
        );
      var i = t + "|" + n + "|" + a;
      return i === "UNMUTED|UNMUTED|UNMUTED"
        ? s._(/*BTDS*/ "")
        : i === "UNMUTED|UNMUTED|SUGGESTED_REPLIES"
          ? s._(/*BTDS*/ "")
          : i === "UNMUTED|UNMUTED|MUTED"
            ? s._(/*BTDS*/ "")
            : i === "UNMUTED|SUGGESTED_REPLIES|UNMUTED"
              ? s._(/*BTDS*/ "")
              : i === "UNMUTED|SUGGESTED_REPLIES|SUGGESTED_REPLIES"
                ? s._(/*BTDS*/ "")
                : i === "UNMUTED|SUGGESTED_REPLIES|MUTED"
                  ? s._(/*BTDS*/ "")
                  : i === "UNMUTED|MUTED|UNMUTED"
                    ? s._(/*BTDS*/ "")
                    : i === "UNMUTED|MUTED|SUGGESTED_REPLIES"
                      ? s._(/*BTDS*/ "")
                      : i === "UNMUTED|MUTED|MUTED"
                        ? s._(/*BTDS*/ "")
                        : i === "SUGGESTED_REPLIES|UNMUTED|UNMUTED"
                          ? s._(/*BTDS*/ "")
                          : i === "SUGGESTED_REPLIES|UNMUTED|SUGGESTED_REPLIES"
                            ? s._(/*BTDS*/ "")
                            : i === "SUGGESTED_REPLIES|UNMUTED|MUTED"
                              ? s._(/*BTDS*/ "")
                              : i ===
                                  "SUGGESTED_REPLIES|SUGGESTED_REPLIES|UNMUTED"
                                ? s._(/*BTDS*/ "")
                                : i ===
                                    "SUGGESTED_REPLIES|SUGGESTED_REPLIES|SUGGESTED_REPLIES"
                                  ? s._(/*BTDS*/ "")
                                  : i ===
                                      "SUGGESTED_REPLIES|SUGGESTED_REPLIES|MUTED"
                                    ? s._(/*BTDS*/ "")
                                    : i === "SUGGESTED_REPLIES|MUTED|UNMUTED"
                                      ? s._(/*BTDS*/ "")
                                      : i ===
                                          "SUGGESTED_REPLIES|MUTED|SUGGESTED_REPLIES"
                                        ? s._(/*BTDS*/ "")
                                        : i === "SUGGESTED_REPLIES|MUTED|MUTED"
                                          ? s._(/*BTDS*/ "")
                                          : i === "MUTED|UNMUTED|UNMUTED"
                                            ? s._(/*BTDS*/ "")
                                            : i ===
                                                "MUTED|UNMUTED|SUGGESTED_REPLIES"
                                              ? s._(/*BTDS*/ "")
                                              : i === "MUTED|UNMUTED|MUTED"
                                                ? s._(/*BTDS*/ "")
                                                : i ===
                                                    "MUTED|SUGGESTED_REPLIES|UNMUTED"
                                                  ? s._(/*BTDS*/ "")
                                                  : i ===
                                                      "MUTED|SUGGESTED_REPLIES|SUGGESTED_REPLIES"
                                                    ? s._(/*BTDS*/ "")
                                                    : i ===
                                                        "MUTED|SUGGESTED_REPLIES|MUTED"
                                                      ? s._(/*BTDS*/ "")
                                                      : i ===
                                                          "MUTED|MUTED|UNMUTED"
                                                        ? s._(/*BTDS*/ "")
                                                        : i ===
                                                            "MUTED|MUTED|SUGGESTED_REPLIES"
                                                          ? s._(/*BTDS*/ "")
                                                          : s._(/*BTDS*/ "");
    }
    function d(e) {
      return e === "UNMUTED"
        ? s._(/*BTDS*/ "")
        : e === "SUGGESTED_REPLIES"
          ? s._(/*BTDS*/ "")
          : e === "MUTED"
            ? s._(/*BTDS*/ "")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function m(e) {
      return e === "UNMUTED"
        ? s._(/*BTDS*/ "")
        : e === "SUGGESTED_REPLIES"
          ? s._(/*BTDS*/ "")
          : e === "MUTED"
            ? s._(/*BTDS*/ "")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function p(e) {
      return e === "CONTACTS"
        ? s._(/*BTDS*/ "")
        : e === "ADS"
          ? s._(/*BTDS*/ "")
          : e === "ALL"
            ? s._(/*BTDS*/ "")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function _(e) {
      return e === "CONTACTS"
        ? s._(/*BTDS*/ "")
        : e === "ADS"
          ? s._(/*BTDS*/ "")
          : e === "ALL"
            ? s._(/*BTDS*/ "")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function f() {
      return s._(/*BTDS*/ "");
    }
    function g() {
      return s._(/*BTDS*/ "");
    }
    function h(e) {
      return s._(/*BTDS*/ "", [s._plural(e, "number")]);
    }
    function y() {
      return s._(/*BTDS*/ "");
    }
    function C() {
      return s._(/*BTDS*/ "");
    }
    function b() {
      return s._(/*BTDS*/ "");
    }
    function v() {
      return s._(/*BTDS*/ "");
    }
    function S(e) {
      return s._(/*BTDS*/ "", [s._param("name", e)]);
    }
    function R(e) {
      return s._(/*BTDS*/ "", [s._param("name", e)]);
    }
    function L(e) {
      return s._(/*BTDS*/ "", [
        s._param("title", g()),
        s._param("count", h(e)),
      ]);
    }
    ((l.DISCONNECT_AI_FAQ_ARTICLE_ID = e),
      (l.getAudienceLabel = u),
      (l.getStatusSummary = c),
      (l.getModeLabel = d),
      (l.getModeDescription = m),
      (l.getModePickerHeader = p),
      (l.getModePickerFooter = _),
      (l.getExceptionsHeader = f),
      (l.getExceptionsTitle = g),
      (l.getExceptionsCount = h),
      (l.getExceptionsFooter = y),
      (l.getExceptionsSearchPlaceholder = C),
      (l.getExceptionsDeselectAllLabel = b),
      (l.getExceptionsSaveLabel = v),
      (l.getExceptionsSelectedChipLabel = S),
      (l.getExceptionsDeselectLabel = R),
      (l.getExceptionsRowAccessibilityLabel = L));
  },
  226,
);

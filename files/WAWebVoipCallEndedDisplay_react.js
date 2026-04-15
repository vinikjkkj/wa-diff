__d(
  "WAWebVoipCallEndedDisplay.react",
  [
    "fbt",
    "WAWebCallCollection",
    "WAWebCallLogUtils",
    "WAWebFlex.react",
    "WAWebVoipWaCallEnums",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        callEndedContainer: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flex: "x98rzlu",
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          $$css: !0,
        },
        callEndedTextContainer: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          paddingTop: "x1p57kb1",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          $$css: !0,
        },
      };
    function d(e) {
      return e == null
        ? s._(/*BTDS*/ "Call ended")
        : e === o("WAWebVoipWaCallEnums").CallFailedReason.RelayBindsFailed
          ? s._(
              /*BTDS*/ "Your Wi-Fi network doesn't support calls. Try switching to another Wi-Fi network.",
            )
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function m() {
      var e,
        t = o("react-compiler-runtime").c(3),
        n = r("WAWebCallCollection").lastActiveCall,
        a = n == null ? void 0 : n.callFailedReason,
        i = n == null ? void 0 : n.callLogResult,
        l = (e = n == null ? void 0 : n.outgoing) != null ? e : !1,
        s;
      if (a != null) {
        var m;
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = d(a)), (t[0] = m))
          : (m = t[0]),
          (s = m));
      } else {
        var p;
        (t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = o("WAWebCallLogUtils").getCallResultText(i, l)), (t[1] = p))
          : (p = t[1]),
          (s = p));
      }
      var _;
      return (
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: c.callEndedContainer,
              children: u.jsx(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                justify: "center",
                xstyle: c.callEndedTextContainer,
                children: u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "persistentAlwaysWhite",
                  selectable: !1,
                  children: s,
                }),
              }),
            })),
            (t[2] = _))
          : (_ = t[2]),
        _
      );
    }
    l.default = m;
  },
  226,
);

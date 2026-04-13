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
        t,
        n = o("react-compiler-runtime").c(4),
        a = r("WAWebCallCollection").lastActiveCall,
        i = a == null ? void 0 : a.callFailedReason,
        l = a == null ? void 0 : a.callLogResult,
        m = (e = a == null ? void 0 : a.outgoing) != null ? e : !1,
        p =
          (t = a == null ? void 0 : a.displayWaitingRoomDenied) != null
            ? t
            : !1,
        _;
      if (p) {
        var f;
        (n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = s._(
              /*BTDS*/ "Your request to join the call was not approved.",
            )),
            (n[0] = f))
          : (f = n[0]),
          (_ = f));
      } else if (i != null) {
        var g;
        (n[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = d(i)), (n[1] = g))
          : (g = n[1]),
          (_ = g));
      } else {
        var h;
        (n[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = o("WAWebCallLogUtils").getCallResultText(l, m)), (n[2] = h))
          : (h = n[2]),
          (_ = h));
      }
      var y;
      return (
        n[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: c.callEndedContainer,
              children: u.jsx(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                justify: "center",
                xstyle: c.callEndedTextContainer,
                children: u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "persistentAlwaysWhite",
                  selectable: !1,
                  children: _,
                }),
              }),
            })),
            (n[3] = y))
          : (y = n[3]),
        y
      );
    }
    l.default = m;
  },
  226,
);

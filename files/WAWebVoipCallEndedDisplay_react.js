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
        t = r("WAWebCallCollection").lastActiveCall,
        n = t == null ? void 0 : t.callFailedReason,
        a = t == null ? void 0 : t.callLogResult,
        i = (e = t == null ? void 0 : t.outgoing) != null ? e : !1,
        l;
      return (
        n != null
          ? (l = d(n))
          : (l = o("WAWebCallLogUtils").getCallResultText(a, i)),
        u.jsx(o("WAWebFlex.react").FlexItem, {
          xstyle: c.callEndedContainer,
          children: u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            xstyle: c.callEndedTextContainer,
            children: u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "persistentAlwaysWhite",
              selectable: !1,
              children: l,
            }),
          }),
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);

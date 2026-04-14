__d(
  "WAWebMessageSpacerText.react",
  [
    "cx",
    "WAWebABProps",
    "WAWebClassnames",
    "WAWebCurrentUser",
    "WAWebMsgGetters",
    "WAWebSpacerText.react",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.children,
        a = e.className,
        i = e["data-id"],
        l = e.isFollowUpReply,
        s = e.msg,
        c = e.overflowVisible,
        d = e.spacer,
        m = e.theme,
        p = o("useWAWebMsgValues").useMsgValues(s.id, [
          o("WAWebMsgGetters").getIsFromTemplate,
        ]),
        _ = p[0],
        f = d != null ? d : !0,
        g;
      return (
        o("WAWebCurrentUser").isEmployee() &&
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_debug_color_code_retry_messages",
          ) &&
          (g = {
            backgroundColor:
              s.backgroundColor != null &&
              typeof s.backgroundColor == "number" &&
              "#" + s.backgroundColor.toString(16),
          }),
        u.jsxs("div", {
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            a,
            ((t = {}),
            (t._akbu = !0),
            (t._akbw = m === "placeholder"),
            (t._akbv = _),
            (t._aut5 = m === "unifiedResponse"),
            t),
            c === !0 ? null : "x6ikm8r x10wlt62",
          ),
          style: g,
          children: [
            n,
            f &&
              u.jsx(r("WAWebSpacerText.react"), { msg: s, isFollowUpReply: l }),
          ],
        })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

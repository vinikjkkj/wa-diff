__d(
  "WAWebMessageCiphertext.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessagePlaceholder.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebPlaceholder",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = function (t) {
        o("WAWebExternalLink.react").openExternalLink(t);
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.msg,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebMsgGetters").getIsGroupMsg,
            o("WAWebFrontendMsgGetters").getSenderObj,
            o("WAWebMsgGetters").getSubtype,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMsgValues").useMsgValues(n.id, a),
        l = i[0],
        d = i[3],
        m;
      t[1] !== l || t[2] !== d
        ? ((m = o("WAWebPlaceholder").getPlaceholderDetails(
            d ? d.toString() : "",
            l,
          )),
          (t[1] = l),
          (t[2] = d),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _ = p.externalLink,
        f = p.placeholderIcon,
        g = p.placeholderMsg,
        h;
      t[4] !== _
        ? ((h =
            _ != null &&
            u.jsx("span", {
              className: "x187aw1n",
              role: "button",
              onClick: function () {
                c(_);
              },
              children: s._(/*BTDS*/ "Learn more"),
            })),
          (t[4] = _),
          (t[5] = h))
        : (h = t[5]);
      var y = h,
        C;
      t[6] !== n
        ? ((C = o("WAWebStateUtils").unproxy(n)), (t[6] = n), (t[7] = C))
        : (C = t[7]);
      var b = e.displayAuthor,
        v;
      t[8] !== n ? ((v = n.unsafe()), (t[8] = n), (t[9] = v)) : (v = t[9]);
      var S;
      t[10] !== y || t[11] !== f || t[12] !== g || t[13] !== v
        ? ((S = u.jsxs(r("WAWebMessagePlaceholder.react"), {
            Icon: f,
            msg: v,
            children: [g, " ", y],
          })),
          (t[10] = y),
          (t[11] = f),
          (t[12] = g),
          (t[13] = v),
          (t[14] = S))
        : (S = t[14]);
      var R;
      return (
        t[15] !== e.displayAuthor || t[16] !== C || t[17] !== S
          ? ((R = u.jsx(r("WAWebMessageTextBubble.react"), {
              msg: C,
              displayAuthor: b,
              children: S,
            })),
            (t[15] = e.displayAuthor),
            (t[16] = C),
            (t[17] = S),
            (t[18] = R))
          : (R = t[18]),
        R
      );
    }
    l.default = d;
  },
  226,
);

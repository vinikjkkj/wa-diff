__d(
  "WAWebMessageEditFlow.react",
  [
    "$InternalEnum",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebFrontendMsgGetters",
    "WAWebMessageEditModal.react",
    "WAWebSendMessageEditAction",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["Edit"]);
    function c(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.msg,
        a;
      t[0] !== n
        ? ((a = o("WAWebFrontendMsgGetters").getChat(n.unsafe())),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l = o("useWAWebFlow").useFlow(u.Edit),
        c = l[0],
        d = l[1];
      if (d.step == null) return null;
      var m;
      t[2] !== i || t[3] !== d || t[4] !== n
        ? ((m = function () {
            (o("WAWebCmd").Cmd.openChatAt({
              chat: i,
              msgContext: o("WAWebChatMessageSearch").getSearchContext({
                chat: i,
                msgKey: n.unsafe().id,
              }),
            }),
              d.end());
          }),
          (t[2] = i),
          (t[3] = d),
          (t[4] = n),
          (t[5] = m))
        : (m = t[5]);
      var p = m,
        _;
      switch (d.step) {
        case u.Edit: {
          var f;
          t[6] !== p || t[7] !== n
            ? ((f = function (t, r) {
                (o("WAWebSendMessageEditAction").sendMessageEdit(
                  n.unsafe(),
                  t,
                  r,
                ),
                  p());
              }),
              (t[6] = p),
              (t[7] = n),
              (t[8] = f))
            : (f = t[8]);
          var g = f,
            h;
          t[9] !== d
            ? ((h = function () {
                return d.end();
              }),
              (t[9] = d),
              (t[10] = h))
            : (h = t[10]);
          var y;
          (t[11] !== g || t[12] !== n || t[13] !== h
            ? ((y = s.jsx(r("WAWebMessageEditModal.react"), {
                msg: n,
                onConfirm: g,
                onCancel: h,
              })),
              (t[11] = g),
              (t[12] = n),
              (t[13] = h),
              (t[14] = y))
            : (y = t[14]),
            (_ = y));
        }
      }
      var C;
      return (
        t[15] !== c || t[16] !== _ || t[17] !== d
          ? ((C = s.jsx(c, { flow: d, children: _ })),
            (t[15] = c),
            (t[16] = _),
            (t[17] = d),
            (t[18] = C))
          : (C = t[18]),
        C
      );
    }
    l.default = c;
  },
  98,
);

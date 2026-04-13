__d(
  "WAWebLinkDeviceApiCmdTooltip.react",
  [
    "fbt",
    "WAWebApi",
    "WAWebFbtAppName",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        tooltip: {
          borderStartStartRadius: "x16qb05n",
          borderStartEndRadius: "xi7iut8",
          borderEndEndRadius: "x1dm3dyd",
          borderEndStartRadius: "x1pv694p",
          display: "x1rg5ohu",
          position: "x1n2onr6",
          zIndex: "x1vjfegm",
          top: "xu5yr9u",
          maxWidth: "x65f84u",
          textWrap: "xk4td0m",
          backgroundColor: "x1l6jbk0",
          color: "xbkck4w",
          fontSize: "x1f6kntn",
          textAlign: "x2b8uid",
          "::before_position": "x1hmns74",
          "::before_display": "x1fgarty",
          "::before_width": "xk9ib7f",
          "::before_height": "x1943h6x",
          "::before_content": "x1cpjm7i",
          "::before_borderInlineStartWidth": "x1c3l08f",
          "::before_borderInlineEndWidth": "xb1m30w",
          "::before_borderInlineStartStyle": "x1rovbrg",
          "::before_borderInlineEndStyle": "x1v3rft4",
          "::before_borderInlineStartColor": "x16dwbfg",
          "::before_borderInlineEndColor": "x18ylnmp",
          "::before_borderBottomWidth": "x1bsu2cp",
          "::before_borderBottomStyle": "x1opv7go",
          "::before_borderBottomColor": "x1eusqyq",
          "::before_top": "x9cv1sk",
          "::before_bottom": "x1ncvqdy",
          "::before_insetInlineStart": "xfbisj7",
          "::before_marginInlineStart": "x1gtk6dz",
          "::before_transform": "x1p0xrc1",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(4),
        a,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            className:
              "x10l6tqk x10w3d4m xbudbmw xvue9z xo5owp6 x1plvlek xryxfnj x2b8uid",
          }),
          (i = (e || (e = r("stylex"))).props(
            d.tooltip,
            o("WAWebUISpacing").uiPadding.vert15,
            o("WAWebUISpacing").uiPadding.horiz20,
          )),
          (n[0] = a),
          (n[1] = i))
        : ((a = n[0]), (i = n[1]));
      var l;
      return (
        n[2] !== t.tip
          ? ((l = c.jsx(
              "div",
              babelHelpers.extends({}, a, {
                children: c.jsx(
                  "div",
                  babelHelpers.extends({}, i, { children: t.tip }),
                ),
              }),
            )),
            (n[2] = t.tip),
            (n[3] = l))
          : (l = n[3]),
        l
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.apiCmd;
      if (n)
        switch (n.resultType) {
          case o("WAWebApi").APICmd.GROUP_INVITE: {
            var r;
            return (
              t[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((r = c.jsx(m, {
                    tip: s._(
                      /*BTDS*/ "Log into {=m1} to join this WhatsApp group",
                      [
                        s._implicitParam(
                          "=m1",
                          c.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                            children: s._(/*BTDS*/ ""),
                          }),
                        ),
                      ],
                    ),
                  })),
                  (t[0] = r))
                : (r = t[0]),
              r
            );
          }
          case o("WAWebApi").APICmd.MSG_SEND: {
            var a;
            return (
              t[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((a = c.jsx(m, {
                    tip: s._(/*BTDS*/ "Log into {=m1} to share", [
                      s._implicitParam(
                        "=m1",
                        c.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                          children: s._(/*BTDS*/ ""),
                        }),
                      ),
                    ]),
                  })),
                  (t[1] = a))
                : (a = t[1]),
              a
            );
          }
        }
      var i;
      return (
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = c.jsx(c.Fragment, {})), (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    l.default = p;
  },
  226,
);

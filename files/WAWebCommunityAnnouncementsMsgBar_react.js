__d(
  "WAWebCommunityAnnouncementsMsgBar.react",
  [
    "fbt",
    "WALogger",
    "WAWebClickable.react",
    "WAWebCmd",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebMsgBarActions",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        wrapper: {
          width: "xh8yej3",
          marginTop: "x16z1lm9",
          marginBottom: "x11tup63",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(11),
        a = t.groupMetadata,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["participants", "parentGroup", "id"]), (n[0] = i))
        : (i = n[0]);
      var l = o("useWAWebModelValues").useModelValues(a, i),
        u = l.parentGroup;
      if (!u)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "CommunityAnnouncementsMsgBar null parent",
              ])),
          ),
          null
        );
      var m;
      n[1] !== l
        ? ((m = function (t) {
            (t.stopPropagation(),
              o("WAWebMsgBarActions").handleMsgAdmin(
                l,
                s._(/*BTDS*/ "Message community admin"),
              ));
          }),
          (n[1] = l),
          (n[2] = m))
        : (m = n[2]);
      var p = m,
        _;
      n[3] !== u
        ? ((_ = function () {
            o("WAWebCmd").Cmd.openCommunityHome(u);
          }),
          (n[3] = u),
          (n[4] = _))
        : (_ = n[4]);
      var f;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { className: "x126k92a" }), (n[5] = f))
        : (f = n[5]);
      var g;
      n[6] !== p
        ? ((g = c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: c.jsx(r("WAWebFlexItem.react"), {
              children: c.jsx(
                "span",
                babelHelpers.extends({}, f, {
                  children: s._(/*BTDS*/ "Only {=m2} can send messages", [
                    s._implicitParam(
                      "=m2",
                      c.jsx(r("WDSTextualLink.react"), {
                        onClick: p,
                        children: s._(/*BTDS*/ "community admins"),
                      }),
                    ),
                  ]),
                }),
              ),
            }),
          })),
          (n[6] = p),
          (n[7] = g))
        : (g = n[7]);
      var h;
      return (
        n[8] !== _ || n[9] !== g
          ? ((h = c.jsx(o("WAWebClickable.react").Clickable, {
              onClick: _,
              xstyle: d.wrapper,
              children: g,
            })),
            (n[8] = _),
            (n[9] = g),
            (n[10] = h))
          : (h = n[10]),
        h
      );
    }
    l.default = m;
  },
  226,
);

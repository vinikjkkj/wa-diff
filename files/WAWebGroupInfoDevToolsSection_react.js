__d(
  "WAWebGroupInfoDevToolsSection.react",
  [
    "WAWebChatInfoDrawerSection.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebDevOnlyBadge.react",
    "WAWebDevToolsSection.react",
    "WAWebExternalLink.react",
    "WAWebURLUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.groupMetadata,
        a = e.isCommunity,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["id"]), (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebModelValues").useModelValues(n, i),
        u = l.id,
        c;
      if (a === !0) {
        var d;
        (t[1] !== u.user
          ? ((d = r("WAWebURLUtils").build(
              "https://www.internalfb.com/intern/whatsapp/admin/community_info",
              { gid: u.user },
            )),
            (t[1] = u.user),
            (t[2] = d))
          : (d = t[2]),
          (c = d));
      } else {
        var m;
        (t[3] !== u.user
          ? ((m = r("WAWebURLUtils").build(
              "https://www.internalfb.com/intern/whatsapp/admin/group_info/",
              { id: u.user, type: "GROUP" },
            )),
            (t[3] = u.user),
            (t[4] = m))
          : (m = t[4]),
          (c = m));
      }
      var p = a === !0 ? "Community" : "Group",
        _;
      t[5] !== c || t[6] !== p
        ? ((_ = s.jsx(r("WAWebDevToolsSection.react"), {
            children: s.jsxs(o("WAWebExternalLink.react").ExternalLink, {
              href: c,
              children: ["Admin Tool - ", p, " Info"],
            }),
          })),
          (t[5] = c),
          (t[6] = p),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      t[8] !== u ? ((f = u.toString()), (t[8] = u), (t[9] = f)) : (f = t[9]);
      var g;
      t[10] !== f
        ? ((g = s.jsxs(r("WAWebDevToolsSection.react"), {
            children: ["Group Id: ", f],
          })),
          (t[10] = f),
          (t[11] = g))
        : (g = t[11]);
      var h;
      return (
        t[12] !== _ || t[13] !== g
          ? ((h = s.jsxs(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
              selectable: !0,
              children: [_, g],
            })),
            (t[12] = _),
            (t[13] = g),
            (t[14] = h))
          : (h = t[14]),
        h
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.groupMetadata,
        r = e.isCommunity,
        a = r === void 0 ? !1 : r;
      if (n != null) {
        var i;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = s.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
              label: "Developer Section",
            })),
            (t[0] = i))
          : (i = t[0]);
        var l;
        return (
          t[1] !== n || t[2] !== a
            ? ((l = s.jsx(
                o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
                {
                  title: i,
                  testid: void 0,
                  children: s.jsx(u, { groupMetadata: n, isCommunity: a }),
                },
              )),
              (t[1] = n),
              (t[2] = a),
              (t[3] = l))
            : (l = t[3]),
          l
        );
      }
    }
    l.default = c;
  },
  98,
);

__d(
  "WAWebChatListMenuItem.react",
  [
    "WAWebChatCellV2.react",
    "WAWebCommunityGatingUtils",
    "WAWebMenuItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["chat", "chatCellRef", "onSelect", "optionId", "ref"],
      s,
      u = s || (s = o("react"));
    function c(e) {
      var t;
      return (
        o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(
          e.groupMetadata,
        ) &&
        ((t = e.groupMetadata) == null ? void 0 : t.getParentGroupChat()) !=
          null
      );
    }
    function d(e, t) {
      var n = t || {},
        r = n.showCommunityInfo,
        o = r === void 0 ? !1 : r;
      return { itemKey: e.id.toString(), height: o && c(e) ? 88 : 72, chat: e };
    }
    function m(t) {
      var n = o("react-compiler-runtime").c(21),
        a,
        i,
        l,
        s,
        c,
        d;
      n[0] !== t
        ? ((a = t.chat),
          (l = t.chatCellRef),
          (s = t.onSelect),
          (c = t.optionId),
          (d = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = c),
          (n[6] = d))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (s = n[4]),
          (c = n[5]),
          (d = n[6]));
      var m = o("WAWebMenuItem.react").useMenuItem(c),
        p = m.border,
        _ = m.colorScheme,
        f = m.isActive,
        g = m.material,
        h = m.size,
        y;
      n[7] !== p ||
      n[8] !== a ||
      n[9] !== i ||
      n[10] !== l ||
      n[11] !== _ ||
      n[12] !== f ||
      n[13] !== g ||
      n[14] !== h
        ? ((y = u.jsx(
            r("WAWebChatCellV2.react"),
            babelHelpers.extends(
              {
                ref: l,
                chat: a,
                colorScheme: _,
                size: h,
                material: g,
                border: p,
                active: f,
              },
              i,
            ),
          )),
          (n[7] = p),
          (n[8] = a),
          (n[9] = i),
          (n[10] = l),
          (n[11] = _),
          (n[12] = f),
          (n[13] = g),
          (n[14] = h),
          (n[15] = y))
        : (y = n[15]);
      var C;
      return (
        n[16] !== s || n[17] !== c || n[18] !== d || n[19] !== y
          ? ((C = u.jsx(o("WAWebMenuItem.react").WAWebMenuItem, {
              ref: d,
              onSelect: s,
              optionId: c,
              type: "action",
              children: y,
            })),
            (n[16] = s),
            (n[17] = c),
            (n[18] = d),
            (n[19] = y),
            (n[20] = C))
          : (C = n[20]),
        C
      );
    }
    ((l.getFlatListConfigFromChat = d), (l.ChatMenuItem = m));
  },
  98,
);

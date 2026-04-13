__d(
  "WAWebChatListFilterLabelsDropdownMenu.react",
  [
    "fbt",
    "WAWebDropdownItem.react",
    "WAWebLabelCollection",
    "WAWebLabels.react",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.hideHeader,
        r = e.unreadChatsCountMap,
        a = e.updateSearchFilter,
        i;
      if (t[0] !== n || t[1] !== r || t[2] !== a) {
        i = Symbol.for("react.early_return_sentinel");
        e: {
          var l = o(
            "WAWebLabelCollection",
          ).LabelCollection.getChatLabelsWithUnarchivedAssociations();
          o("WAWebListUtils").sortLabels(l);
          var c;
          t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = o("WAWebListsGatingUtils").isListsEnabled()), (t[4] = c))
            : (c = t[4]);
          var d = c,
            m;
          t[5] !== r || t[6] !== a
            ? ((m = function (t, n) {
                var e;
                if (!n.name) return t;
                var i = d
                  ? (e = r == null ? void 0 : r.get(n.id)) != null
                    ? e
                    : 0
                  : void 0;
                return (
                  t.push(
                    u.jsx(
                      o("WAWebDropdownItem.react").DropdownItem,
                      {
                        testid: void 0,
                        action: function () {
                          return a(n.id);
                        },
                        children: u.jsx("button", {
                          className:
                            "x78zum5 x9f619 xh8yej3 x16ovd2e x1evaxtz x12xbjc7 xb0esv5 x6ikm8r x10wlt62 x1yc453h",
                          children: u.jsx(o("WAWebLabels.react").Labels, {
                            labels: [n.id],
                            showName: !0,
                            theme: "label-filter",
                            unreadCount: i,
                            isListsFeatureEnabled: d,
                          }),
                        }),
                      },
                      "label_item_" + n.id,
                    ),
                  ),
                  t
                );
              }),
              (t[5] = r),
              (t[6] = a),
              (t[7] = m))
            : (m = t[7]);
          var p = l.reduce(m, []);
          if (p.length > 0) {
            if (n !== !0) {
              var _;
              t[8] === Symbol.for("react.memo_cache_sentinel")
                ? ((_ = {
                    className: "x889kno xsfy40s x1a8lsjc x13jy36j x14ug900",
                  }),
                  (t[8] = _))
                : (_ = t[8]);
              var f;
              t[9] === Symbol.for("react.memo_cache_sentinel")
                ? ((f = u.createElement(
                    "div",
                    babelHelpers.extends({}, _, {
                      key: "chat_filter_label_header",
                    }),
                    s._(/*BTDS*/ "Labels"),
                  )),
                  (t[9] = f))
                : (f = t[9]);
              var g = f;
              p.unshift(g);
            }
            i = p;
            break e;
          }
        }
        ((t[0] = n), (t[1] = r), (t[2] = a), (t[3] = i));
      } else i = t[3];
      if (i !== Symbol.for("react.early_return_sentinel")) return i;
      var h;
      return (
        t[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = []), (t[10] = h))
          : (h = t[10]),
        h
      );
    }
    l.default = c;
  },
  226,
);

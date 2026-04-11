__d(
  "WAWebBizBroadcastsSuccessfulContacts.react",
  [
    "fbt",
    "WAWebBizBroadcastsContactChatCell.react",
    "WAWebContactCollection",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.actions,
        a = e.contacts,
        i,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx("div", {
            className: "x3x0x6p xjm9jq1 xefnzgg x6pxu1d xd6izgl x1380le5",
          })),
          (l = { className: "x12xbjc7 x1phvje8 xcldk2z x16ovd2e" }),
          (t[0] = i),
          (t[1] = l))
        : ((i = t[0]), (l = t[1]));
      var c;
      t[2] !== a.length
        ? ((c = u.jsx("tbody", {
            children: u.jsx("tr", {
              children: u.jsxs("td", {
                colSpan: 4,
                children: [
                  i,
                  u.jsx(
                    "div",
                    babelHelpers.extends({}, l, {
                      children: u.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "accentEmphasized",
                        children: s._(
                          /*BTDS*/ '_j{"*":"{number_of_recipients} recipients","_1":"1 recipient"}',
                          [s._plural(a.length, "number_of_recipients")],
                        ),
                      }),
                    }),
                  ),
                ],
              }),
            }),
          })),
          (t[2] = a.length),
          (t[3] = c))
        : (c = t[3]);
      var d;
      if (t[4] !== n || t[5] !== a) {
        var m;
        (t[7] !== n
          ? ((m = function (t, a) {
              var e, i;
              return u.jsxs(
                "tr",
                {
                  children: [
                    u.jsx("td", {
                      className: "xdx6fka",
                      children: u.jsx(
                        r("WAWebBizBroadcastsContactChatCell.react"),
                        {
                          contact:
                            (t == null ? void 0 : t.lid) == null
                              ? null
                              : o(
                                  "WAWebContactCollection",
                                ).ContactCollection.get(
                                  t == null ? void 0 : t.lid,
                                ),
                          index: a,
                          rowData: {
                            name: (
                              ((e = t.firstName) != null ? e : "") +
                              " " +
                              ((i = t.lastName) != null ? i : "")
                            ).trim(),
                          },
                        },
                      ),
                    }),
                    u.jsx("td", {
                      className: "xxymvpz",
                      children: u.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "accent",
                        children: t.phone,
                      }),
                    }),
                    u.jsx("td", {}),
                    u.jsx("td", {
                      className: "x78zum5 x7v6yn8",
                      children: u.jsx("div", {
                        className: "x78zum5 x7v6yn8",
                        children: n == null ? void 0 : n(t),
                      }),
                    }),
                  ],
                },
                t.phone + "-" + a,
              );
            }),
            (t[7] = n),
            (t[8] = m))
          : (m = t[8]),
          (d = a.map(m)),
          (t[4] = n),
          (t[5] = a),
          (t[6] = d));
      } else d = t[6];
      var p;
      t[9] !== d
        ? ((p = u.jsx("tbody", { children: d })), (t[9] = d), (t[10] = p))
        : (p = t[10]);
      var _;
      return (
        t[11] !== c || t[12] !== p
          ? ((_ = u.jsxs(u.Fragment, { children: [c, p] })),
            (t[11] = c),
            (t[12] = p),
            (t[13] = _))
          : (_ = t[13]),
        _
      );
    }
    l.default = c;
  },
  226,
);

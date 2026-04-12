__d(
  "WAWebBizBroadcastsSuccessfulContacts.react",
  [
    "fbt",
    "WAWebBizBroadcastsContactChatCell.react",
    "WAWebContactCollection",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.actions,
        n = e.contacts;
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("tbody", {
            children: u.jsx("tr", {
              children: u.jsxs("td", {
                colSpan: 4,
                children: [
                  u.jsx("div", {
                    className:
                      "x3x0x6p xjm9jq1 xefnzgg x6pxu1d xd6izgl x1380le5",
                  }),
                  u.jsx("div", {
                    className: "x12xbjc7 x1phvje8 xcldk2z x16ovd2e",
                    children: u.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "accentEmphasized",
                      children: s._(
                        /*BTDS*/ '_j{"*":"{number_of_recipients} recipients","_1":"1 recipient"}',
                        [s._plural(n.length, "number_of_recipients")],
                      ),
                    }),
                  }),
                ],
              }),
            }),
          }),
          u.jsx("tbody", {
            children: n.map(function (e, n) {
              var a, i;
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
                            (e == null ? void 0 : e.lid) == null
                              ? null
                              : o(
                                  "WAWebContactCollection",
                                ).ContactCollection.get(
                                  e == null ? void 0 : e.lid,
                                ),
                          index: n,
                          rowData: {
                            name: (
                              ((a = e.firstName) != null ? a : "") +
                              " " +
                              ((i = e.lastName) != null ? i : "")
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
                        children: e.phone,
                      }),
                    }),
                    u.jsx("td", {}),
                    u.jsx("td", {
                      className: "x78zum5 x7v6yn8",
                      children: u.jsx("div", {
                        className: "x78zum5 x7v6yn8",
                        children: t == null ? void 0 : t(e),
                      }),
                    }),
                  ],
                },
                e.phone + "-" + n,
              );
            }),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);

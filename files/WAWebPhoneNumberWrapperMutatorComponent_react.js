__d(
  "WAWebPhoneNumberWrapperMutatorComponent.react",
  [
    "fbt",
    "WALogger",
    "WAWebChatRefreshedIcon.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebCopyRefreshedIcon.react",
    "WAWebDropdownItem.react",
    "WAWebFlex.react",
    "WAWebGetOrQueryUsyncInfoContactAction",
    "WAWebPhoneNumberContactAction",
    "WAWebPhoneUtils",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        spinnerContainer: { width: "xc5o50y", height: "x6hvgyk", $$css: !0 },
        spinnerText: {
          marginTop: "xcxhlts",
          paddingInlineStart: "x1gx403c",
          paddingInlineEnd: "x1q3ajuy",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        menuItem: {
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          $$css: !0,
        },
        textualLinkRefreshed: {
          color: "xo1mcw5",
          fontWeight: "x1xlr1w8",
          textDecoration: "x1hl2dhg",
          ":hover_textDecoration": "xt0b8zv",
          ":focus-visible_textDecoration": "xbvygy2",
          ":focus-visible_color": "x17f7hit",
          ":focus-visible_backgroundColor": "xp30eni",
          ":focus-visible_textUnderlineOffset": "xhmieyt",
          $$css: !0,
        },
      };
    function p(t) {
      var a = t.fromMe,
        i = t.phoneNumber,
        l = t.selectable,
        u = d(null),
        p = u[0],
        _ = u[1],
        f = d(null),
        g = f[0],
        h = f[1],
        y = d(null),
        C = y[0],
        b = y[1],
        v = d(null),
        S = v[0],
        R = v[1];
      function L(t) {
        var r;
        C && C.isCached(i)
          ? (r = C)
          : ((r = o(
              "WAWebGetOrQueryUsyncInfoContactAction",
            ).usyncContactCached()),
            b(r));
        function a(e, t) {
          return l.apply(this, arguments);
        }
        function l() {
          return (
            (l = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                try {
                  var a = yield r.getOrRun(t);
                  k(a, n);
                } catch (t) {
                  (k(null, n),
                    R(null),
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "handlePhoneClick getUsync failed with exceptions ",
                            "",
                          ])),
                        t,
                      )
                      .sendLogs("handlePhoneClick-getUsync"));
                }
              },
            )),
            l.apply(this, arguments)
          );
        }
        (r.isCached(i) || E(t), a(i, t));
      }
      function E(e) {
        var t = c.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: m.spinnerContainer,
          align: "center",
          justify: "center",
          children: [
            c.jsx(o("WAWebSpinner.react").Spinner, {
              size: 50,
              stroke: 4,
              color: "highlight",
            }),
            c.jsx(
              o("WAWebText.react").WAWebTextSmall,
              {
                as: "span",
                xstyle: m.spinnerText,
                children: s._(/*BTDS*/ "Checking phone number..."),
              },
              "phone_number_wrapper_loading_text",
            ),
          ],
        });
        (h({ menu: t, event: e }), _(null));
      }
      function k(e, t) {
        var n = [];
        if (e != null && e.wid) {
          var r = o("WAWebPhoneUtils").formatPhone(i);
          n.push(
            c.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                xstyle: m.menuItem,
                action: function (n) {
                  return o("WAWebPhoneNumberContactAction").handleOpenChat(
                    n,
                    e.wid,
                    a,
                  );
                },
                icon: c.jsx(
                  o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon,
                  {},
                ),
                children: s._(/*BTDS*/ "Chat with {chat-with-phoneNumber}", [
                  s._param(
                    "chat-with-phoneNumber",
                    c.jsx("span", { dir: "ltr", children: r }),
                  ),
                ]),
              },
              "message-on-whatsapp",
            ),
          );
        }
        (n.push(
          c.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              xstyle: m.menuItem,
              action: function () {
                return o("WAWebPhoneNumberContactAction").handleCopyPhoneNumber(
                  i,
                  e == null ? void 0 : e.wid,
                  a,
                );
              },
              icon: c.jsx(
                o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
                {},
              ),
              children: s._(/*BTDS*/ "Copy phone number"),
            },
            "copy-phone-number",
          ),
        ),
          h(null),
          _({ menu: n, event: t }),
          R(e == null ? void 0 : e.wid),
          o("WAWebPhoneNumberContactAction").logClickOnPhoneNumber(
            e == null ? void 0 : e.wid,
            a,
          ));
      }
      var I = null,
        T = null;
      return (
        p &&
          (I = c.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "ContextMenu",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: function () {
              (_(null),
                o("WAWebPhoneNumberContactAction").logCloseDialog(S, a));
            },
            children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: p }),
          })),
        g &&
          (T = c.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "ContextSpinner",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: function () {
              h(null);
            },
            children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: g }),
          })),
        c.jsxs(c.Fragment, {
          children: [
            c.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
              onClick: L,
              selectable: l,
              xstyle: m.textualLinkRefreshed,
              style: { cursor: "pointer" },
              children: i,
            }),
            I,
            T,
          ],
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);

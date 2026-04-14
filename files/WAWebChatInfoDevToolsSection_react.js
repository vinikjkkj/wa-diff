__d(
  "WAWebChatInfoDevToolsSection.react",
  [
    "fbt",
    "WALogger",
    "WAWebChatInfoDrawerSection.react",
    "WAWebDevOnlyBadge.react",
    "WAWebDevToolsSection.react",
    "WAWebExternalLink.react",
    "WAWebFrontendContactGetters",
    "WAWebLid1X1MigrationGating",
    "WAWebLidAwareContactsDB",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebURLUtils",
    "WAWebWid",
    "WAWebWidDevTools",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState;
    function _(t) {
      var n = p([]),
        a = n[0],
        i = n[1];
      return (
        m(
          function () {
            r("WAWebLidAwareContactsDB")
              .equals(["phoneNumber"], t.toString())
              .then(function (e) {
                i(
                  e
                    .filter(function (e) {
                      return r("WAWebWid").isStringLid(e.id);
                    })
                    .map(function (e) {
                      var t = e.id;
                      return o("WAWebWidFactory").createUserWidOrThrow(t);
                    }),
                );
              })
              .catch(function () {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[useLidsForPhoneNumber] fetch contacts failed",
                    ])),
                );
              });
          },
          [t],
        ),
        a
      );
    }
    function f(e) {
      var t = e.chat,
        n = e.phoneNumber,
        a = _(n),
        i =
          a.length === 0
            ? null
            : c.jsxs(r("WAWebDevToolsSection.react"), {
                children: [
                  "LID",
                  a.length === 1 ? "" : "s",
                  ": ",
                  a.map(h).join(", "),
                ],
              }),
        l = "https://www.internalfb.com/intern/bunny/?q=waflb+" + n.user,
        u = r("WAWebURLUtils").build(
          "https://www.internalfb.com/intern/whatsapp/admin/user_info",
          { phone: n.user },
        ),
        d = n.isFbidBot()
          ? "https://wa.me/ais/" + n.user
          : "https://wa.me/" + n.user;
      return c.jsxs(c.Fragment, {
        children: [
          c.jsxs(r("WAWebDevToolsSection.react"), {
            children: [
              !n.isFbidBot() &&
                c.jsxs(c.Fragment, {
                  children: [
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: u,
                      children: "Admin Tool",
                    }),
                    " / ",
                    c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: l,
                      children: "Crashlogs",
                    }),
                    " / ",
                  ],
                }),
              c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: d,
                onClick: function () {
                  window.navigator.clipboard
                    .writeText(d)
                    .then(function () {
                      o("WAWebToastManager").ToastManager.open(
                        c.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(/*BTDS*/ "Link copied to clipboard."),
                        }),
                      );
                    })
                    .catch(function () {
                      o("WAWebToastManager").ToastManager.open(
                        c.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(
                            /*BTDS*/ "Couldn't copy to clipboard. Copy using mouse or keyboard.",
                          ),
                        }),
                      );
                    });
                },
                children: "wa.me",
              }),
            ],
          }),
          c.jsx(y, { chat: t, id: n }),
          i,
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.chat,
        n = e.lid,
        a = r("WAWebURLUtils").build(
          "https://www.internalfb.com/intern/whatsapp/admin/user_info",
          { lid: n.user },
        ),
        i = o("useWAWebContactValues").useContactValues(n, [
          o("WAWebFrontendContactGetters").getPhoneNumber,
        ]),
        l = i[0],
        s =
          l != null
            ? o("WAWebWidFormat").widToFormattedUser(r("WAWebWid").user(l))
            : "N/A";
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx(r("WAWebDevToolsSection.react"), {
            children: c.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: a,
              children: "Admin Tool",
            }),
          }),
          c.jsx(y, { chat: t, id: n }),
          c.jsxs(r("WAWebDevToolsSection.react"), {
            children: ["PhoneNumber: ", s],
          }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = o("WAWebWidDevTools").isWidClientAssigned(e) ? "(fake lid)" : "";
      return e.toString() + " " + t;
    }
    function y(e) {
      var t = e.chat,
        n = e.id;
      return t
        ? c.jsx(C, { chat: t })
        : c.jsxs(r("WAWebDevToolsSection.react"), {
            children: ["ContactId: ", n.toString()],
          });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.chat,
        n = t.contact.id.isRegularUser();
      return c.jsxs(c.Fragment, {
        children: [
          n &&
            c.jsxs(r("WAWebDevToolsSection.react"), {
              children: [
                "Is Username Contact:",
                " ",
                t.contact.isUsernameContact ? "true" : "false",
              ],
            }),
          c.jsxs(r("WAWebDevToolsSection.react"), {
            children: [
              "1:1 LID Migrated:",
              " ",
              o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated()
                ? "Migrated"
                : "Not Migrated",
            ],
          }),
          c.jsxs(r("WAWebDevToolsSection.react"), {
            children: ["ChatId: ", t.id.toString()],
          }),
          o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isLidMigrated() && t.accountLid != null
            ? c.jsxs(r("WAWebDevToolsSection.react"), {
                children: ["AccountLid: ", h(t.accountLid)],
              })
            : null,
          t.id.isLid() &&
            c.jsxs(r("WAWebDevToolsSection.react"), {
              children: [
                "ChatOrigin:",
                " ",
                t.lidOriginType == null ? "pnh_ctwa" : t.lidOriginType,
              ],
            }),
        ],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.chat,
        n = e.contact,
        r = n.id;
      if (r.isUser())
        return r.isLid()
          ? c.jsx(g, { chat: t, lid: r })
          : c.jsx(f, { phoneNumber: r, chat: t });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.chat,
        n = e.contact,
        r = e.isRefresh;
      return c.jsx(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
        {
          title: c.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
            label: "Developer Section",
          }),
          titleXStyle: r === !0 && o("WAWebUISpacing").uiPadding.all0,
          children: c.jsx(b, { chat: t, contact: n }),
        },
      );
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = v));
  },
  226,
);

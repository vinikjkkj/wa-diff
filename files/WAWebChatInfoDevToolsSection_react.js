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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(23),
        n = e.chat,
        a = e.phoneNumber,
        i = _(a),
        l;
      t[0] !== i
        ? ((l =
            i.length === 0
              ? null
              : c.jsxs(r("WAWebDevToolsSection.react"), {
                  children: [
                    "LID",
                    i.length === 1 ? "" : "s",
                    ": ",
                    i.map(C).join(", "),
                  ],
                })),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var s = l,
        u = "https://www.internalfb.com/intern/bunny/?q=waflb+" + a.user,
        d;
      t[2] !== a.user
        ? ((d = r("WAWebURLUtils").build(
            "https://www.internalfb.com/intern/whatsapp/admin/user_info",
            { phone: a.user },
          )),
          (t[2] = a.user),
          (t[3] = d))
        : (d = t[3]);
      var m = d,
        p = a.isFbidBot()
          ? "https://wa.me/ais/" + a.user
          : "https://wa.me/" + a.user,
        f;
      t[4] !== u || t[5] !== m || t[6] !== a
        ? ((f =
            !a.isFbidBot() &&
            c.jsxs(c.Fragment, {
              children: [
                c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: m,
                  children: "Admin Tool",
                }),
                " / ",
                c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: u,
                  children: "Crashlogs",
                }),
                " / ",
              ],
            })),
          (t[4] = u),
          (t[5] = m),
          (t[6] = a),
          (t[7] = f))
        : (f = t[7]);
      var y;
      t[8] !== p
        ? ((y = function () {
            window.navigator.clipboard.writeText(p).then(h).catch(g);
          }),
          (t[8] = p),
          (t[9] = y))
        : (y = t[9]);
      var v;
      t[10] !== y || t[11] !== p
        ? ((v = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: p,
            onClick: y,
            children: "wa.me",
          })),
          (t[10] = y),
          (t[11] = p),
          (t[12] = v))
        : (v = t[12]);
      var S;
      t[13] !== f || t[14] !== v
        ? ((S = c.jsxs(r("WAWebDevToolsSection.react"), { children: [f, v] })),
          (t[13] = f),
          (t[14] = v),
          (t[15] = S))
        : (S = t[15]);
      var R;
      t[16] !== n || t[17] !== a
        ? ((R = c.jsx(b, { chat: n, id: a })),
          (t[16] = n),
          (t[17] = a),
          (t[18] = R))
        : (R = t[18]);
      var L;
      return (
        t[19] !== s || t[20] !== S || t[21] !== R
          ? ((L = c.jsxs(c.Fragment, { children: [S, R, s] })),
            (t[19] = s),
            (t[20] = S),
            (t[21] = R),
            (t[22] = L))
          : (L = t[22]),
        L
      );
    }
    function g() {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ "Couldn't copy to clipboard. Copy using mouse or keyboard.",
          ),
        }),
      );
    }
    function h() {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Link copied to clipboard."),
        }),
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.chat,
        a = e.lid,
        i;
      t[0] !== a.user
        ? ((i = r("WAWebURLUtils").build(
            "https://www.internalfb.com/intern/whatsapp/admin/user_info",
            { lid: a.user },
          )),
          (t[0] = a.user),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        s;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = [o("WAWebFrontendContactGetters").getPhoneNumber]), (t[2] = s))
        : (s = t[2]);
      var u = o("useWAWebContactValues").useContactValues(a, s),
        d = u[0],
        m;
      t[3] !== d
        ? ((m =
            d != null
              ? o("WAWebWidFormat").widToFormattedUser(r("WAWebWid").user(d))
              : "N/A"),
          (t[3] = d),
          (t[4] = m))
        : (m = t[4]);
      var p = m,
        _;
      t[5] !== l
        ? ((_ = c.jsx(r("WAWebDevToolsSection.react"), {
            children: c.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: l,
              children: "Admin Tool",
            }),
          })),
          (t[5] = l),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      t[7] !== n || t[8] !== a
        ? ((f = c.jsx(b, { chat: n, id: a })),
          (t[7] = n),
          (t[8] = a),
          (t[9] = f))
        : (f = t[9]);
      var g;
      t[10] !== p
        ? ((g = c.jsxs(r("WAWebDevToolsSection.react"), {
            children: ["PhoneNumber: ", p],
          })),
          (t[10] = p),
          (t[11] = g))
        : (g = t[11]);
      var h;
      return (
        t[12] !== _ || t[13] !== f || t[14] !== g
          ? ((h = c.jsxs(c.Fragment, { children: [_, f, g] })),
            (t[12] = _),
            (t[13] = f),
            (t[14] = g),
            (t[15] = h))
          : (h = t[15]),
        h
      );
    }
    function C(e) {
      var t = o("WAWebWidDevTools").isWidClientAssigned(e) ? "(fake lid)" : "";
      return e.toString() + " " + t;
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.chat,
        a = e.id;
      if (n) {
        var i;
        return (
          t[0] !== n
            ? ((i = c.jsx(v, { chat: n })), (t[0] = n), (t[1] = i))
            : (i = t[1]),
          i
        );
      }
      var l;
      t[2] !== a ? ((l = a.toString()), (t[2] = a), (t[3] = l)) : (l = t[3]);
      var s;
      return (
        t[4] !== l
          ? ((s = c.jsxs(r("WAWebDevToolsSection.react"), {
              children: ["ContactId: ", l],
            })),
            (t[4] = l),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.chat,
        a;
      t[0] !== n.contact.id
        ? ((a = n.contact.id.isRegularUser()),
          (t[0] = n.contact.id),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== n.contact.isUsernameContact || t[3] !== i
        ? ((l =
            i &&
            c.jsxs(r("WAWebDevToolsSection.react"), {
              children: [
                "Is Username Contact:",
                " ",
                n.contact.isUsernameContact ? "true" : "false",
              ],
            })),
          (t[2] = n.contact.isUsernameContact),
          (t[3] = i),
          (t[4] = l))
        : (l = t[4]);
      var s;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = c.jsxs(r("WAWebDevToolsSection.react"), {
            children: [
              "1:1 LID Migrated:",
              " ",
              o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated()
                ? "Migrated"
                : "Not Migrated",
            ],
          })),
          (t[5] = s))
        : (s = t[5]);
      var u;
      t[6] !== n.id
        ? ((u = n.id.toString()), (t[6] = n.id), (t[7] = u))
        : (u = t[7]);
      var d;
      t[8] !== u
        ? ((d = c.jsxs(r("WAWebDevToolsSection.react"), {
            children: ["ChatId: ", u],
          })),
          (t[8] = u),
          (t[9] = d))
        : (d = t[9]);
      var m;
      t[10] !== n.accountLid
        ? ((m =
            o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated() && n.accountLid != null
              ? c.jsxs(r("WAWebDevToolsSection.react"), {
                  children: ["AccountLid: ", C(n.accountLid)],
                })
              : null),
          (t[10] = n.accountLid),
          (t[11] = m))
        : (m = t[11]);
      var p;
      t[12] !== n.id || t[13] !== n.lidOriginType
        ? ((p =
            n.id.isLid() &&
            c.jsxs(r("WAWebDevToolsSection.react"), {
              children: [
                "ChatOrigin:",
                " ",
                n.lidOriginType == null ? "pnh_ctwa" : n.lidOriginType,
              ],
            })),
          (t[12] = n.id),
          (t[13] = n.lidOriginType),
          (t[14] = p))
        : (p = t[14]);
      var _;
      return (
        t[15] !== l || t[16] !== d || t[17] !== m || t[18] !== p
          ? ((_ = c.jsxs(c.Fragment, { children: [l, s, d, m, p] })),
            (t[15] = l),
            (t[16] = d),
            (t[17] = m),
            (t[18] = p),
            (t[19] = _))
          : (_ = t[19]),
        _
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.chat,
        r = e.contact,
        a = r.id;
      if (a.isUser()) {
        var i;
        return (
          t[0] !== n || t[1] !== a
            ? ((i = a.isLid()
                ? c.jsx(y, { chat: n, lid: a })
                : c.jsx(f, { phoneNumber: a, chat: n })),
              (t[0] = n),
              (t[1] = a),
              (t[2] = i))
            : (i = t[2]),
          i
        );
      }
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.chat,
        r = e.contact,
        a = e.isRefresh,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = c.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
            label: "Developer Section",
          })),
          (t[0] = i))
        : (i = t[0]);
      var l = a === !0 && o("WAWebUISpacing").uiPadding.all0,
        s;
      t[1] !== n || t[2] !== r
        ? ((s = c.jsx(S, { chat: n, contact: r })),
          (t[1] = n),
          (t[2] = r),
          (t[3] = s))
        : (s = t[3]);
      var u;
      return (
        t[4] !== l || t[5] !== s
          ? ((u = c.jsx(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
              { title: i, titleXStyle: l, children: s },
            )),
            (t[4] = l),
            (t[5] = s),
            (t[6] = u))
          : (u = t[6]),
        u
      );
    }
    l.default = R;
  },
  226,
);

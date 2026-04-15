__d(
  "WAWebEphemeralSettingRow.react",
  [
    "fbt",
    "WAWebAfterReadUtils",
    "WAWebBlockContactAction",
    "WAWebChatEphemerality",
    "WAWebChatInfoDrawerRow.react",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralFbtKic",
    "WAWebEphemeralityDurations",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebNoop",
    "WDSIconWdsIcDisappearingMessages.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.chat,
        r = e.groupMetadata,
        a = e.onClick,
        i = e.testid;
      if (r) {
        var l;
        return (
          t[0] !== r || t[1] !== a || t[2] !== i
            ? ((l = u.jsx(m, { groupMetadata: r, onClick: a, testid: void 0 })),
              (t[0] = r),
              (t[1] = a),
              (t[2] = i),
              (t[3] = l))
            : (l = t[3]),
          l
        );
      }
      var s;
      return (
        t[4] !== n || t[5] !== a || t[6] !== i
          ? ((s = u.jsx(_, { chat: n, onClick: a, testid: void 0 })),
            (t[4] = n),
            (t[5] = a),
            (t[6] = i),
            (t[7] = s))
          : (s = t[7]),
        s
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.onClick,
        r = e.testid,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["ephemeralDuration", "participants", "afterReadDuration"]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useModelValues(e.groupMetadata, a),
        l;
      t[1] !== i.afterReadDuration || t[2] !== i.ephemeralDuration
        ? ((l = function () {
            var e,
              t = i.afterReadDuration;
            return t != null &&
              t > 0 &&
              o("WAWebAfterReadUtils").isAfterReadEnabled()
              ? t
              : (e = i.ephemeralDuration) != null
                ? e
                : 0;
          }),
          (t[1] = i.afterReadDuration),
          (t[2] = i.ephemeralDuration),
          (t[3] = l))
        : (l = t[3]);
      var s = l,
        c = p,
        d;
      t[4] !== i || t[5] !== n
        ? ((d = function () {
            i.canSetEphemeralSetting() ? n() : c();
          }),
          (t[4] = i),
          (t[5] = n),
          (t[6] = d))
        : (d = t[6]);
      var m = d,
        _;
      t[7] !== s ? ((_ = s()), (t[7] = s), (t[8] = _)) : (_ = t[8]);
      var g;
      t[9] !== i
        ? ((g = i.canSetEphemeralSetting()), (t[9] = i), (t[10] = g))
        : (g = t[10]);
      var h;
      return (
        t[11] !== m || t[12] !== _ || t[13] !== g || t[14] !== r
          ? ((h = u.jsx(f, {
              ephemeralDuration: _,
              canChange: g,
              onClick: m,
              testid: void 0,
              spaced: !0,
            })),
            (t[11] = m),
            (t[12] = _),
            (t[13] = g),
            (t[14] = r),
            (t[15] = h))
          : (h = t[15]),
        h
      );
    }
    function p() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "ephemeral-setting",
          },
          onOK: o("WAWebModalManager").closeModalManager,
          okText: r("WAWebFbtCommon")("OK"),
          children: s._(/*BTDS*/ "Only admins can change this setting."),
        }),
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.onClick,
        a = e.testid,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["contact", "ephemeralDuration", "afterReadDuration"]),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebModelValues").useModelValues(e.chat, i),
        c;
      t[1] !== l
        ? ((c = function () {
            var e,
              t = o("WAWebChatEphemerality").getAfterReadDurationForChat(l);
            return t != null ? t : (e = l.ephemeralDuration) != null ? e : 0;
          }),
          (t[1] = l),
          (t[2] = c))
        : (c = t[2]);
      var d = c,
        m;
      t[3] !== l.contact || t[4] !== n
        ? ((m = function () {
            l.contact
              .addPendingAction(
                o("WAWebBlockContactAction").unblockContact(l.contact),
              )
              .then(function () {
                (n(), o("WAWebModalManager").ModalManager.close());
              })
              .catch(r("WAWebNoop"));
          }),
          (t[3] = l.contact),
          (t[4] = n),
          (t[5] = m))
        : (m = t[5]);
      var p = m,
        _;
      t[6] !== d || t[7] !== p
        ? ((_ = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "ephemeral-setting",
                },
                onOK: p,
                okText: r("WAWebFbtCommon")("Unblock"),
                onCancel: o("WAWebModalManager").closeModalManager,
                children: d()
                  ? s._(
                      /*BTDS*/ "You can't turn off disappearing messages for this chat unless you unblock this contact.",
                    )
                  : s._(
                      /*BTDS*/ "You can't turn on disappearing messages for this chat unless you unblock this contact.",
                    ),
              }),
            );
          }),
          (t[6] = d),
          (t[7] = p),
          (t[8] = _))
        : (_ = t[8]);
      var g = _,
        h;
      t[9] !== l.contact.isContactBlocked || t[10] !== n || t[11] !== g
        ? ((h = function () {
            l.contact.isContactBlocked ? g() : n();
          }),
          (t[9] = l.contact.isContactBlocked),
          (t[10] = n),
          (t[11] = g),
          (t[12] = h))
        : (h = t[12]);
      var y = h,
        C;
      t[13] !== d ? ((C = d()), (t[13] = d), (t[14] = C)) : (C = t[14]);
      var b;
      return (
        t[15] !== y || t[16] !== C || t[17] !== a
          ? ((b = u.jsx(f, {
              ephemeralDuration: C,
              canChange: !0,
              onClick: y,
              testid: void 0,
            })),
            (t[15] = y),
            (t[16] = C),
            (t[17] = a),
            (t[18] = b))
          : (b = t[18]),
        b
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.canChange,
        a = e.ephemeralDuration,
        i = e.onClick,
        l = e.testid,
        d;
      if (a > 0)
        if (n) {
          var m;
          (t[0] !== a
            ? ((m = o("WAWebEphemeralityDurations").durationToLabel(a)),
              (t[0] = a),
              (t[1] = m))
            : (m = t[1]),
            (d = m));
        } else {
          var p;
          (t[2] !== a
            ? ((p = o(
                "WAWebEphemeralFbtKic",
              ).getDisappearingMessageExplanationStringKic(a)),
              (t[2] = a),
              (t[3] = p))
            : (p = t[3]),
            (d = p));
        }
      else {
        var _;
        (t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = s._(/*BTDS*/ "Off")), (t[4] = _))
          : (_ = t[4]),
          (d = _));
      }
      var f;
      if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
        var g = s._(/*BTDS*/ "Disappearing messages");
        ((f = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
          title: g,
        })),
          (t[5] = f));
      } else f = t[5];
      var h = f,
        y;
      t[6] !== d
        ? ((y = u.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed,
            { title: d, testid: void 0 },
          )),
          (t[6] = d),
          (t[7] = y))
        : (y = t[7]);
      var C = y,
        b;
      if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
        var v = { iconXstyle: c.secondaryColor, height: 20 };
        ((b = u.jsx(
          r("WDSIconWdsIcDisappearingMessages.react"),
          babelHelpers.extends({ testid: void 0 }, v),
        )),
          (t[8] = b));
      } else b = t[8];
      var S = b,
        R;
      return (
        t[9] !== i || t[10] !== C || t[11] !== l
          ? ((R = u.jsx(
              o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
              {
                icon: S,
                onClick: i,
                title: h,
                secondaryTitle: C,
                testid: void 0,
              },
            )),
            (t[9] = i),
            (t[10] = C),
            (t[11] = l),
            (t[12] = R))
          : (R = t[12]),
        R
      );
    }
    ((l.EphemeralSettingRow = d), (l.BaseEphemeralSettingRow = f));
  },
  226,
);

__d(
  "WAWebBizAiAppointmentConnectorValueProps",
  [
    "fbt",
    "WAWebMarkdownLinkFormatMutator",
    "WDSIconIcAttachMoney.react",
    "WDSIconIcBlock.react",
    "WDSIconIcCalendarMonth.react",
    "WDSIconIcCancel.react",
    "WDSIconIcChevronRight.react",
    "WDSIconIcCreditCard.react",
    "WDSIconIcDelete.react",
    "WDSIconIcFormatListBulleted.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLock.react",
    "WDSIconIcMail.react",
    "WDSIconIcPerson.react",
    "WDSIconIcPublic.react",
    "WDSIconIcSchool.react",
    "WDSIconIcStickyNote2.react",
    "WDSIconWdsIcAi.react",
    "WDSTextualLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "https://faq.whatsapp.com/1474886260686868/",
      d = "APPLE_CALENDAR",
      m = new Map([
        ["calendar", r("WDSIconIcCalendarMonth.react")],
        ["cancel", r("WDSIconIcCancel.react")],
        ["card", r("WDSIconIcCreditCard.react")],
        ["cash", r("WDSIconIcAttachMoney.react")],
        ["chevron", r("WDSIconIcChevronRight.react")],
        ["globe", r("WDSIconIcPublic.react")],
        ["info", r("WDSIconIcInfo.react")],
        ["lock", r("WDSIconIcLock.react")],
        ["mail", r("WDSIconIcMail.react")],
        ["menu", r("WDSIconIcFormatListBulleted.react")],
        ["note", r("WDSIconIcStickyNote2.react")],
        ["person", r("WDSIconIcPerson.react")],
        ["school", r("WDSIconIcSchool.react")],
        ["stardust", r("WDSIconWdsIcAi.react")],
        ["trash", r("WDSIconIcDelete.react")],
      ]);
    function p(e, t) {
      var n = [
        {
          icon: r("WDSIconIcFormatListBulleted.react"),
          text: s._(
            /*BTDS*/ "Meta will access {calendar name} (such as availability and event details) to enable your Business AI agents to book appointments with customers.",
            [s._param("calendar name", e.displayName)],
          ),
        },
        {
          icon: r("WDSIconIcCalendarMonth.react"),
          text: s._(
            /*BTDS*/ "Your AI agent will use this info to book appointments for you in chats. {learn more link}",
            [
              s._param(
                "learn more link",
                u.jsx(r("WDSTextualLink.react"), {
                  href: c,
                  testid: t + "-learn-more",
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          ),
        },
      ];
      return (
        e.apixfnPlugin === d &&
          n.push({
            icon: r("WDSIconIcLock.react"),
            text: s._(
              /*BTDS*/ "Apple doesn't let apps connect directly, so you'll create a password just for your AI agent to use. Your Apple Account password stays private.",
            ),
          }),
        n.push({
          icon: r("WDSIconIcBlock.react"),
          text: e.isMembrane
            ? s._(
                /*BTDS*/ "You can connect using Membrane and disconnect anytime in Settings.",
              )
            : s._(
                /*BTDS*/ "You can disconnect {calendar name} anytime in Settings.",
                [s._param("calendar name", e.displayName)],
              ),
        }),
        n
      );
    }
    function _(e, t) {
      return e.map(function (e, n) {
        return {
          icon: f(e.glyphName),
          iconDirectional: e.glyphName === "chevron",
          text: h(e.textMarkdown, t + "-" + n),
        };
      });
    }
    function f(e) {
      var t;
      return (t = e == null ? null : m.get(e)) != null
        ? t
        : r("WDSIconIcFormatListBulleted.react");
    }
    function g(e) {
      return s._(/*BTDS*/ "{server-provided connector text}", [
        s._param("server-provided connector text", e),
      ]);
    }
    function h(e, t) {
      return s._(/*BTDS*/ "{server-provided connector content}", [
        s._param(
          "server-provided connector content",
          u.jsx(u.Fragment, { children: y(e, t) }),
        ),
      ]);
    }
    function y(e, t) {
      var n = [],
        o = 0,
        a = r("WAWebMarkdownLinkFormatMutator").match(e);
      return (
        a.forEach(function (a, i) {
          var l = a[0],
            s = a[1],
            c = a[2],
            d = a[3],
            m = a[4],
            p = e.slice(o, l);
          p !== "" && n.push(u.jsx(u.Fragment, { children: p }, "prefix-" + i));
          var _ = m[3];
          (n.push(
            C(_)
              ? u.jsx(
                  r("WDSTextualLink.react"),
                  {
                    href: _,
                    testid: t + "-link-" + i,
                    children: g(e.slice(s, c + 1)),
                  },
                  "link-" + i,
                )
              : u.jsx(
                  u.Fragment,
                  { children: e.slice(l, d + 1) },
                  "unsafe-link-" + i,
                ),
          ),
            (o = d + 1));
        }),
        o < e.length &&
          n.push(u.jsx(u.Fragment, { children: e.slice(o) }, "text-final")),
        n
      );
    }
    function C(e) {
      try {
        var t = new URL(e);
        return t.protocol === "http:" || t.protocol === "https:";
      } catch (e) {
        return !1;
      }
    }
    ((l.getAppointmentConnectorNuxBullets = p),
      (l.getAppointmentConnectorValuePropBullets = _),
      (l.wrapServerMarkdown = h));
  },
  226,
);

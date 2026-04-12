__d(
  "WAWebGroupPastParticipantSearch.react",
  [
    "fbt",
    "WALogger",
    "WAWebElevatedPushNamesFlag",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlatList.react",
    "WAWebFlex.react",
    "WAWebGroupParticipantsFlow.react",
    "WAWebGroupPastParticipant.react",
    "WAWebL10NAccentFold",
    "WAWebModalManager",
    "WAWebModalsListModal.react",
    "WAWebPhoneNumberSearch",
    "WAWebSectionHeader.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "react",
    "useWAWebDebouncedSearch",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = { HEADER: "HEADER", ROW: "ROW", DISCLAIMER: "DISCLAIMER" },
      p = o("WAWebModalsListModal.react").ListModalFactory();
    function _(e) {
      var t,
        n = e.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(e, u),
        i = a.chat,
        l = a.onBack,
        c = a.onClose,
        _ = a.onContactInfo,
        g = (t = i.groupMetadata) == null ? void 0 : t.pastParticipants,
        h = r("useWAWebDebouncedSearch")(),
        C = h[0],
        b = h[1],
        v = r("useWAWebEventTargetValue")(
          g,
          ["buld_add", "bulk_remove", "reset"],
          function () {
            var e,
              t = o("WAWebL10NAccentFold").accentFold(C),
              n = o("WAWebPhoneNumberSearch").numberSearch(t),
              r =
                (e =
                  g == null
                    ? void 0
                    : g.getValidRecords().filter(function (e) {
                        var r = !t || e.contact.searchMatchExact(t, n);
                        return (
                          !o("WAWebUserPrefsMeUser").isMeAccount(e.id) && r
                        );
                      })) != null
                  ? e
                  : [];
            if (!r.length) return [];
            var a = [];
            return (
              a.push({
                type: m.HEADER,
                header: s._(/*BTDS*/ "Past members"),
                itemKey: "list_header",
              }),
              r.forEach(function (e, t) {
                return a.push({
                  type: m.ROW,
                  participant: e,
                  itemKey: e.id.toString() + "_" + t,
                });
              }),
              a.push({ type: m.DISCLAIMER, itemKey: "list_disclaimer" }),
              a
            );
          },
          [C],
        ),
        S = function (t) {
          if (_) {
            var e = o("WAWebGroupParticipantsFlow.react").getOneToOneContact(
              t.participant.contact,
            );
            e && (o("WAWebModalManager").ModalManager.close(), _(e));
          }
        };
      return d.jsx(p, {
        ref: n,
        title: s._(/*BTDS*/ "Search past members"),
        data: v,
        renderItem: function (t) {
          return d.jsx(f, {
            data: t,
            elevatedPushNamesEnabled: o(
              "WAWebElevatedPushNamesFlag",
            ).elevatedPushNamesM2Enabled(i),
            onClick:
              t.type === m.ROW
                ? function () {
                    return S(t);
                  }
                : void 0,
          });
        },
        emptyState: d.jsx(y, {}),
        onSearch: b,
        searchPlaceholder: s._(/*BTDS*/ "Search contacts"),
        onBack: l,
        onCancel: c,
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(t) {
      var n,
        a = t.data,
        i = t.elevatedPushNamesEnabled,
        l = t.onClick;
      switch (a.type) {
        case m.HEADER:
          return d.jsx(r("WAWebSectionHeader.react"), {
            header: (n = a.header) != null ? n : "",
            uppercase: !1,
          });
        case m.ROW:
          return d.jsx(r("WAWebGroupPastParticipant.react"), {
            participant: a.participant,
            elevatedPushNamesEnabled: i,
            onClick: l,
          });
        case m.DISCLAIMER:
          return d.jsx(h, {});
        default:
          throw (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "UnknownDataError: WAWebGroupPastParticipantSearch",
                ])),
            ),
            new (o("WAWebFlatList.react").UnknownDataError)(a)
          );
      }
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = {
      row: { height: "xy75621", backgroundColor: "x1280gxy", $$css: !0 },
      disclaimer: { fontSize: "x1f6kntn", color: "xhslqc4", $$css: !0 },
      empty: { fontSize: "x1jchvi3", color: "x181ptb6", $$css: !0 },
    };
    function h() {
      return d.jsx(o("WAWebFlex.react").FlexRow, {
        xstyle: [g.row, g.disclaimer, o("WAWebUISpacing").uiPadding.horiz15],
        align: "center",
        justify: "center",
        children: d.jsx("span", {
          children: s._(
            /*BTDS*/ "People who left or were removed in the last 60 days. {=m2}",
            [
              s._implicitParam(
                "=m2",
                d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getHowToExitAndDeleteGroupsFaq(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          ),
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return d.jsxs(d.Fragment, {
        children: [
          d.jsx(r("WAWebSectionHeader.react"), {
            header: s._(/*BTDS*/ "Past members"),
            uppercase: !1,
          }),
          d.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: [g.row, g.empty],
            align: "center",
            justify: "center",
            children: d.jsx("span", {
              children: r("WAWebFbtCommon")("No results found"),
            }),
          }),
          d.jsx(h, {}),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);

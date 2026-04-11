__d(
  "WAWebBroadcastInfoTopCard.react",
  [
    "fbt",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastsAudienceStrings",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBizBroadcastsHomeStrings",
    "WAWebBroadcastListAction",
    "WAWebBusinessBroadcastInlineEditableText.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebClock",
    "WAWebCopyPasteSelectable.react",
    "WAWebDrawerSection.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebNoop",
    "WAWebText_DONOTUSE.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumSurfaceType",
    "WAWebWidToJid",
    "WDSActionTile.react",
    "WDSActionTileGroup.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconWdsIcBroadcastMessage.react",
    "WDSIconWdsIcBroadcastMessageFill.react",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback,
      d = {
        broadcastIcon: {
          color: "xhslqc4",
          height: "x39lw6i",
          width: "xycev2y",
          $$css: !0,
        },
        broadcastIconSvg: { height: "x5yr21d", width: "xh8yej3", $$css: !0 },
        editNameInput: { fontSize: "xngnso2", $$css: !0 },
        measureSpan: { fontSize: "xngnso2", $$css: !0 },
        topCardContainer: { paddingBottom: "x18d9i69", $$css: !0 },
      };
    function m(e) {
      "use no forget";
      var t,
        n,
        a,
        i = e.chat,
        l = e.entryPoint,
        m = e.onAudienceUpdate,
        p = e.onEditAudience,
        _ = e.onNewBroadcast,
        f = (t = i.groupMetadata) == null ? void 0 : t.participants,
        g = o("useWAWebModelValues").useModelValues(i.contact, ["name"]),
        h = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(f, "add remove reset", h);
      var y = o("WAWebWidToJid").widToBroadcastJid(i.id),
        C = c(
          function (e) {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.undoRenameAudienceClicked(
              l,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
              y,
            ),
              y != null &&
                o("WAWebBroadcastListAction")
                  .renameBroadcastListAction(y, e)
                  .then(function () {
                    m == null || m();
                  })
                  .catch(r("WAWebNoop")));
          },
          [y, l, m],
        ),
        b = c(
          function (e) {
            var t;
            if (y != null) {
              var n = (t = g.name) != null ? t : "";
              return o("WAWebBroadcastListAction")
                .renameBroadcastListAction(y, e)
                .then(function () {
                  (o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.renameAudienceResult(
                    l,
                    o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                      .BB_AUDIENCE_INFO_DRAWER,
                    y,
                    "success",
                  ),
                    m == null || m(),
                    o("WAWebToastManager").ToastManager.open(
                      u.jsx(o("WAWebToast.react").Toast, {
                        msg: o(
                          "WAWebBizBroadcastsHomeStrings",
                        ).getAudienceRenamedToastMessage(),
                        action: {
                          actionText: r("WAWebFbtCommon")("Undo"),
                          onAction: function () {
                            return C(n);
                          },
                        },
                      }),
                    ));
                })
                .catch(function () {
                  (o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.renameAudienceResult(
                    l,
                    o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                      .BB_AUDIENCE_INFO_DRAWER,
                    y,
                    "failure",
                  ),
                    o("WAWebToastManager").ToastManager.open(
                      u.jsx(o("WAWebToast.react").Toast, {
                        msg: o(
                          "WAWebBizBroadcastsHomeStrings",
                        ).getAudienceRenameFailedToastMessage(),
                      }),
                    ));
                });
            }
          },
          [y, g.name, l, C, m],
        ),
        v = function () {
          var e = i.t;
          return e != null
            ? o("WAWebClock").Clock.broadcastCreatedStr(e).toString()
            : s._(/*BTDS*/ "Created").toString();
        },
        S =
          g.name != null && g.name.trim() !== ""
            ? g.name
            : o("WAWebBizBroadcastsAudienceStrings").getUntitledListName(),
        R =
          ((n = o(
            "WAWebAudienceExpressionTypes",
          ).getPredicateExpressionFromChat({
            broadcastMetadata:
              i.broadcastMetadata != null
                ? { audienceExpression: i.broadcastMetadata.audienceExpression }
                : null,
          })) == null
            ? void 0
            : n.predicateType) ===
          o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_LABEL,
        L = function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.audienceInfoDrawerEditRecipientsClicked(
            l,
            y,
          ),
            p == null || p());
        },
        E = function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.newBroadcastTileClicked(
            l,
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
            y,
          ),
            _ == null || _());
        },
        k = u.jsx("div", {
          className: "xw7yly9 xh8yej3",
          children: u.jsxs(r("WDSActionTileGroup.react"), {
            children: [
              u.jsx(r("WDSActionTile.react"), {
                Icon: r("WDSIconIcPersonAdd.react"),
                disabled: R,
                label: s._(/*BTDS*/ "Edit recipients"),
                onPress: L,
                tooltip: o(
                  "WAWebBizBroadcastsHomeStrings",
                ).getEditAudiencesWithListsLabel(),
              }),
              u.jsx(r("WDSActionTile.react"), {
                Icon: r("WDSIconWdsIcBroadcastMessage.react"),
                label: o(
                  "WAWebBizBroadcastsCreationStrings",
                ).getNewBroadcastButtonLabel(),
                onPress: E,
              }),
            ],
          }),
        });
      return u.jsxs(r("WAWebDrawerSection.react"), {
        theme: "padding-large",
        xstyle: d.topCardContainer,
        children: [
          u.jsx("div", {
            className: "x78zum5 xl56j7k xieb3on",
            children: u.jsx("div", {
              className:
                "x6s0dn4 x1od0jb8 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x78zum5 x1wkxgih xl56j7k x6ikm8r x10wlt62 xygnafs",
              children: u.jsx(r("WDSIconWdsIcBroadcastMessageFill.react"), {
                xstyle: d.broadcastIcon,
                iconXstyle: d.broadcastIconSvg,
                "aria-hidden": !0,
              }),
            }),
          }),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            children: [
              u.jsx(r("WAWebBusinessBroadcastInlineEditableText.react"), {
                disabled: R,
                value: (a = g.name) != null ? a : "",
                onSave: b,
                displayText: S,
                inputTestId: "broadcast-name-input",
                inputXstyle: d.editNameInput,
                measureXstyle: d.measureSpan,
              }),
              u.jsx("div", {
                className: "x1evy7pa x7r5mf7",
                children: u.jsx(
                  o("WAWebCopyPasteSelectable.react").SelectableSpan,
                  {
                    dir: "auto",
                    selectable: !0,
                    children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                      size: "16",
                      color: "secondary",
                      children: v(),
                    }),
                  },
                ),
              }),
              R &&
                u.jsx("div", {
                  className: "x1evy7pa x7r5mf7",
                  children: u.jsx(
                    o("WAWebCopyPasteSelectable.react").SelectableSpan,
                    {
                      dir: "auto",
                      selectable: !0,
                      children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                        size: "16",
                        color: "secondary",
                        children: o(
                          "WAWebBizBroadcastsHomeStrings",
                        ).getEditAudiencesWithListsLabel(),
                      }),
                    },
                  ),
                }),
              k,
            ],
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);

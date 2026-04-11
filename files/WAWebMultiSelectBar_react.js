__d(
  "WAWebMultiSelectBar.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebChatEphemerality",
    "WAWebCopyUtils",
    "WAWebEnvironment",
    "WAWebForwardActionUserJourneyLogger",
    "WAWebKeepInChatMsgUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgCollection",
    "WAWebMultiSelectCount.react",
    "WAWebMultiSelectDelete.react",
    "WAWebMultiSelectDownload.react",
    "WAWebMultiSelectForward.react",
    "WAWebMultiSelectKeep.react",
    "WAWebMultiSelectStar.react",
    "WAWebNewsletterMsgLinkUtils",
    "WAWebTabOrder",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WDSIconIcClose.react",
    "WDSIconIcContentCopy.react",
    "WDSIconIcLink.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useMergeRefs",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c.useRef,
      p = {
        multiControls: {
          position: "x10l6tqk",
          bottom: "x1ey2m1c",
          insetInlineStart: "x1o0tod",
          zIndex: "xfo81ep",
          boxSizing: "x9f619",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          height: "x12659sl",
          backgroundColor: "x1od0jb8",
          $$css: !0,
        },
        mediaGalleryTheme: {
          top: "x13vifvy",
          height: "x7j6532",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        btnMargin: { marginInlineEnd: "xqf2s3x", $$css: !0 },
      },
      _ = n("$InternalEnum")({
        CONVERSATION_PANEL: "conversation_panel",
        MEDIA: "media",
        DOCS: "docs",
        LINKS: "links",
        PRODUCTS: "products",
      }),
      f = n("$InternalEnum")({
        DEFAULT: "default",
        DELETE: "delete",
        FORWARD: "forward",
      });
    function g(t) {
      "use no forget";
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.selectedMessages,
        c = i.chat,
        _ = i.toastPosition,
        g = i.onCancel,
        h = i.noSortOnForward,
        y = i.downloadButton,
        C = y === void 0 ? !0 : y,
        b = i.entryPoint,
        v = i.mode,
        S = v === void 0 ? f.DEFAULT : v,
        R = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        L = m(null),
        E = r("useMergeRefs")(a, L),
        k = function () {
          var e = l.getSelected();
          o("WAWebNewsletterMsgLinkUtils").handleNewsletterMessageLinkCopyClick(
            e[0],
          );
        },
        I = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o("WAWebCopyUtils").copyMessagesToClipboard(T);
            if (e != null && e > 0) {
              var t = s._(
                /*BTDS*/ '_j{"*":"Copied {number_of_reactions} messages to clipboard","_1":"Copied 1 message to clipboard"}',
                [s._plural(e, "number_of_reactions")],
              );
              (o("WAWebToastManager").ToastManager.open(
                d.jsx(o("WAWebToast.react").Toast, { msg: t }),
              ),
                g());
            } else
              o("WAWebToastManager").ToastManager.open(
                d.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Couldn't copy to clipboard"),
                }),
              );
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      (o("useWAWebListener").useListeners(
        l.getSelected().map(function (e) {
          return { source: e, eventOrEvents: "change:star", callback: R };
        }),
      ),
        o("useWAWebListener").useListener(l, "all", R),
        o("useWAWebListener").useListener(
          o("WAWebMsgCollection").MsgCollection,
          "change:star change:kicState",
          function (e) {
            l.isSelected(e) && R();
          },
        ));
      var T = i.selectedMessages.getSelected(),
        D = T.length,
        x =
          D === 1 &&
          o("WAWebMsgActionCapability").canCopyNewsletterMessageLink(T[0]),
        $ = x
          ? d.jsx(r("WDSMenuBarItem.react"), {
              tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR,
              icon: r("WDSIconIcLink.react"),
              onClick: k,
              title: s._(/*BTDS*/ "Copy link"),
              marginInlineXstyle: p.btnMargin,
            })
          : null,
        P = r("WAWebEnvironment").isWindows
          ? d.jsx(r("WDSMenuBarItem.react"), {
              tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR,
              icon: r("WDSIconIcContentCopy.react"),
              disabled:
                T.length === 0 ||
                !T.every(function (e) {
                  return o("WAWebCopyUtils").canCopyMessage(e);
                }),
              title: s._(/*BTDS*/ "Copy"),
              onClick: I,
              marginInlineXstyle: p.btnMargin,
            })
          : null,
        N = d.jsx(r("WAWebMultiSelectForward.react"), {
          noSortOnForward: h,
          onCancel: g,
          selectedMessages: l,
          onForwardModalOpen: function () {
            o(
              "WAWebForwardActionUserJourneyLogger",
            ).ForwardActionUserJourneyLogger.forwardButtonTappedInForwardToolbar(
              l.getSelected(),
            );
          },
        }),
        M = d.jsx(r("WAWebMultiSelectDelete.react"), {
          onCancel: g,
          selectedMessages: l,
          toastPosition: _,
        }),
        w = D > 0,
        A = w,
        F = !1,
        O = !1,
        B = !1;
      T.forEach(function (e) {
        o("WAWebKeepInChatMsgUtils").canShowKeepOrUnkeepOption(e)
          ? (F = !0)
          : ((O = !0),
            (A = !1),
            o("WAWebKeepInChatMsgUtils").keepIsLockedForMe(e) && (B = !0));
      });
      var W,
        q,
        U = (F || B) && O;
      if (!U) {
        var V = A || (!D && o("WAWebChatEphemerality").isEphemeralSettingOn(c));
        V
          ? (q = d.jsx(r("WAWebMultiSelectKeep.react"), {
              selectedMessages: l,
              onCancel: g,
              entryPoint: b,
            }))
          : (W = d.jsx(r("WAWebMultiSelectStar.react"), {
              selectedMessages: l,
              onCancel: g,
              toastPosition: _,
            }));
      }
      var H = d.jsx(r("WAWebMultiSelectDownload.react"), {
          downloadButton: C,
          onCancel: g,
          selectedMessages: l,
          tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR,
        }),
        G = i.theme === "mediaGallery",
        z = [];
      switch (S) {
        case f.DELETE:
          z.push(M);
          break;
        case f.FORWARD:
          z.push(N);
          break;
        case f.DEFAULT:
          z.push($, P, W, q, M, N, H);
          break;
      }
      var j =
          S === f.DELETE
            ? s._(/*BTDS*/ "Cancel delete")
            : S === f.FORWARD
              ? s._(/*BTDS*/ "Cancel forward")
              : S === f.DEFAULT
                ? s._(/*BTDS*/ "Cancel selection")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        S,
                    );
                  })(),
        K = d.jsx(r("WDSMenuBarItem.react"), {
          title: j,
          tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR,
          icon: r("WDSIconIcClose.react"),
          testid: void 0,
          onClick: i.onCancel,
          marginInlineXstyle: p.btnMargin,
        });
      return d.jsxs(
        "div",
        babelHelpers.extends(
          { ref: E },
          (u || (u = r("stylex"))).props(
            G && p.mediaGalleryTheme,
            p.multiControls,
            o("WAWebUISpacing").uiPadding.start15,
            o("WAWebUISpacing").uiPadding.end16,
          ),
          {
            children: [
              K,
              d.jsx(r("WAWebMultiSelectCount.react"), {
                selectedMsgsCount: D,
                theme: i.theme,
              }),
              z,
            ],
          },
        ),
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.MultiSelectBarEntryPoint = _),
      (l.MultiSelectMode = f),
      (l.MultiSelectBar = g));
  },
  226,
);

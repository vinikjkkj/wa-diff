__d(
  "WAWebBizBroadcastsBizToolsUploadDrawerButton.react",
  [
    "fbt",
    "WAWebBizBroadcastsManageAudiencePanelLoadable",
    "WAWebBizBroadcastsUploadModalLoadable.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebDrawerButton.react",
    "WAWebDrawerManager",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebWamEnumEntryPoint",
    "WDSIconIcUpload.react",
    "react",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = { icon: { color: "xrllbb6", $$css: !0 } };
    function m() {
      var e = r("useWAWebNux")(
          o("WAWebNux").NUX.BUSINESS_BROADCAST_AUDIENCE_UPLOAD,
        ),
        t = e[0],
        n = e[1];
      c(function () {
        o(
          "WAWebBusinessBroadcastUserJourneyLogger",
        ).BusinessBroadcastUserJourneyLogger.importAudienceViewed(
          o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
        );
      }, []);
      var a = function () {
        (t && n(),
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.importAudienceClicked(
            o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
          ),
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebBizBroadcastsUploadModalLoadable.react")
                .WAWebBizBroadcastsUploadModalLoadable,
              {
                entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                  .BUSINESS_HOME,
                onCancel: function (t, n) {
                  (n === void 0 && (n = !1),
                    o("WAWebModalManager").ModalManager.close(),
                    n !== !0 &&
                      o(
                        "WAWebBusinessBroadcastUserJourneyLogger",
                      ).BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(
                        o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
                      ));
                },
                onUploadSuccess: function (t, n) {
                  return o("WAWebDrawerManager").DrawerManager.openDrawerMid(
                    u.jsx(
                      o("WAWebBizBroadcastsManageAudiencePanelLoadable")
                        .WAWebBizBroadcastsManageAudiencePanelLoadable,
                      {
                        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT
                          .BUSINESS_HOME,
                        validContactsData: t,
                        errorList: n,
                      },
                    ),
                  );
                },
                showModalImage: !0,
              },
            ),
          ));
      };
      return u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
        testid: void 0,
        theme: "biz-tools",
        divider: !1,
        secondaryChildren: s._(
          /*BTDS*/ "Upload a list of broadcast recipients",
        ),
        icon: u.jsx(r("WDSIconIcUpload.react"), {
          width: 24,
          height: 24,
          iconXstyle: d.icon,
        }),
        detail: t
          ? u.jsx("div", {
              className:
                "x1qe8gl4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xdk7pt xqf2s3x x1xc55vz",
            })
          : null,
        active: !1,
        onClick: a,
        children: s._(/*BTDS*/ "Broadcast audience"),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);

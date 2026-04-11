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
    "react-compiler-runtime",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = { icon: { color: "xrllbb6", $$css: !0 } };
    function m() {
      var e = o("react-compiler-runtime").c(12),
        t = r("useWAWebNux")(
          o("WAWebNux").NUX.BUSINESS_BROADCAST_AUDIENCE_UPLOAD,
        ),
        n = t[0],
        a = t[1],
        i;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = []), (e[0] = i))
        : (i = e[0]),
        c(f, i));
      var l;
      e[1] !== a || e[2] !== n
        ? ((l = function () {
            (n && a(),
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
                    onCancel: _,
                    onUploadSuccess: p,
                    showModalImage: !0,
                  },
                ),
              ));
          }),
          (e[1] = a),
          (e[2] = n),
          (e[3] = l))
        : (l = e[3]);
      var m = l,
        g,
        h;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Upload a list of broadcast recipients")),
          (h = u.jsx(r("WDSIconIcUpload.react"), {
            width: 24,
            height: 24,
            iconXstyle: d.icon,
          })),
          (e[4] = g),
          (e[5] = h))
        : ((g = e[4]), (h = e[5]));
      var y;
      e[6] !== n
        ? ((y = n
            ? u.jsx("div", {
                className:
                  "x1qe8gl4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xdk7pt xqf2s3x x1xc55vz",
              })
            : null),
          (e[6] = n),
          (e[7] = y))
        : (y = e[7]);
      var C;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Broadcast audience")), (e[8] = C))
        : (C = e[8]);
      var b;
      return (
        e[9] !== m || e[10] !== y
          ? ((b = u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              testid: void 0,
              theme: "biz-tools",
              divider: !1,
              secondaryChildren: g,
              icon: h,
              detail: y,
              active: !1,
              onClick: m,
              children: C,
            })),
            (e[9] = m),
            (e[10] = y),
            (e[11] = b))
          : (b = e[11]),
        b
      );
    }
    function p(e, t) {
      return o("WAWebDrawerManager").DrawerManager.openDrawerMid(
        u.jsx(
          o("WAWebBizBroadcastsManageAudiencePanelLoadable")
            .WAWebBizBroadcastsManageAudiencePanelLoadable,
          {
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
            validContactsData: e,
            errorList: t,
          },
        ),
      );
    }
    function _(e, t) {
      var n = t === void 0 ? !1 : t;
      (o("WAWebModalManager").ModalManager.close(),
        n !== !0 &&
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(
            o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
          ));
    }
    function f() {
      o(
        "WAWebBusinessBroadcastUserJourneyLogger",
      ).BusinessBroadcastUserJourneyLogger.importAudienceViewed(
        o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
      );
    }
    l.default = m;
  },
  226,
);

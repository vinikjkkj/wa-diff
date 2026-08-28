__d(
  "AdsVideoActions",
  [
    "invariant",
    "AdsAddToastCardAction",
    "AdsInstagramVideoUploadStartDataAction",
    "AdsInterfacesLogger",
    "AdsPerfInteractionConstants",
    "AdsPerfInteractionsController",
    "AdsVideoBatchLoadErrorDataAction",
    "AdsVideoBatchLoadedDataAction",
    "AdsVideoFilterDataAction",
    "AdsVideoItemClickedDataAction",
    "AdsVideoOpenSelectorDataAction",
    "AdsVideoSearchDataAction",
    "AdsVideoUploadCancelDataAction",
    "AdsVideoUploadErrorDataActionFlux",
    "AdsVideoUploadFinishDataAction",
    "AdsVideoUploadStartDataAction",
    "AdsVideoUploadStatus",
    "AdsVideoUploadToastCardUtils",
    "AdsVideoUploadUtil",
    "InteractionTracingMetrics",
    "QPLUserFlow",
    "VideoAdsCreationSessionStateManager",
    "WaterfallIDGenerator",
    "isStringNullOrEmpty",
    "logVultureJSDeadCodeUsage",
    "qpl",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      r("AdsVideoOpenSelectorDataAction").dispatch(
        {},
        { line: "54", module: "AdsVideoActions.js", moduleID: i.id },
      );
    }
    function u(e) {
      r("AdsVideoBatchLoadedDataAction").dispatch(
        { videos: e },
        { line: "60", module: "AdsVideoActions.js", moduleID: i.id },
      );
    }
    function c(e) {
      r("AdsVideoBatchLoadErrorDataAction").dispatch(
        { errors: e },
        { line: "66", module: "AdsVideoActions.js", moduleID: i.id },
      );
    }
    function d() {
      r("AdsVideoItemClickedDataAction").dispatch(
        {},
        { line: "72", module: "AdsVideoActions.js", moduleID: i.id },
      );
    }
    function m(e, t, n, o, a) {
      r("AdsVideoUploadStartDataAction").dispatch(
        {
          title: e,
          accountID: t,
          videoID: n,
          editingVideo: !0,
          context: o,
          hostID: a,
        },
        { line: "82", module: "AdsVideoActions.js", moduleID: i.id },
      );
    }
    function p(e, t, n, a, l, s, u, c, d) {
      var m = String(o("WaterfallIDGenerator").generate());
      (r("VideoAdsCreationSessionStateManager").startUploadSession(m, t),
        a != null
          ? r("QPLUserFlow").addPoint(
              r("qpl")._(218956945, "1379"),
              "start_upload_files",
            )
          : r("QPLUserFlow").addPoint(
              r("qpl")._(218970632, "4565"),
              "start_upload_files",
            ),
        e.forEach(function (e, p) {
          return r("AdsVideoUploadStartDataAction").dispatch(
            {
              accountID: t,
              businessFolderToken: a,
              context:
                p !== 0 && n != null
                  ? o("AdsVideoUploadUtil").getBulkUploadVideoUploaderContext(n)
                  : n,
              entryPoint: l,
              file: e,
              uploaderKey: o("AdsVideoUploadUtil").generateCustomUploaderKey(
                p,
                e.name,
              ),
              waterfallID: m,
              adgroupIDs: s,
              isLocalVideoUpload: u,
              isUVF: c,
              isMultiUploadEligible: d,
            },
            { line: "119", module: "AdsVideoActions.js", moduleID: i.id },
          );
        }));
    }
    function _(e, t, n, a, l, s, u, c) {
      var d = String(o("WaterfallIDGenerator").generate());
      r("VideoAdsCreationSessionStateManager").startUploadSession(d, l);
      var m = r("isStringNullOrEmpty")(u) ? null : u;
      e
        ? r("AdsVideoUploadStartDataAction").dispatch(
            {
              accountID: l,
              file: e,
              context: c,
              uploaderKey: a,
              waterfallID: d,
              isSphericalReupload: !0,
              reEncodingFormat: s,
              originalSphericalVideoID: m,
            },
            { line: "160", module: "AdsVideoActions.js", moduleID: i.id },
          )
        : !r("isStringNullOrEmpty")(t) &&
          !r("isStringNullOrEmpty")(n) &&
          r("AdsVideoUploadStartDataAction").dispatch(
            {
              accountID: l,
              title: n,
              url: t,
              context: c,
              uploaderKey: a,
              waterfallID: d,
              isSphericalReupload: !0,
              reEncodingFormat: s,
              originalSphericalVideoID: m,
            },
            { line: "171", module: "AdsVideoActions.js", moduleID: i.id },
          );
    }
    function f(e, t, n, a, l, s, u) {
      if (
        (e.forEach(function (e, o) {
          return r("AdsVideoUploadStartDataAction").dispatch(
            {
              accountID: t,
              file: e,
              uploaderKey: o,
              context: n,
              adgroupIDs: a,
              isMultiUploadEligible: u,
            },
            { line: "197", module: "AdsVideoActions.js", moduleID: i.id },
          );
        }),
        a)
      ) {
        var c = [],
          d = { videoUploadingAdgroupIDs: a };
        if (l != null && l && e.size === 0) {
          var m,
            p =
              (m = r("AdsPerfInteractionsController")
                .getAllOngoingInteraction()
                .get("am.toast_card.video_upload")) == null
                ? void 0
                : m.interactionID;
          (p != null &&
            (r("InteractionTracingMetrics").addMarkerPoint(
              p,
              o("AdsVideoUploadErrorDataActionFlux").actionType,
              "AppTiming",
            ),
            r("AdsPerfInteractionsController").addCustomInteractionAnnotation(
              "am.toast_card.video_upload",
              {
                videoUploadErrorCallsite: o("AdsPerfInteractionConstants")
                  .VideoUploadErrorCallsiteEnums.UPLOAD_BULK_VIDEOS,
                videoUploadErrorMessage: "All uploaded videos are invalid",
              },
              s,
            )),
            (c = o("AdsVideoUploadToastCardUtils").createToastCard(
              [],
              "error",
              null,
              o("AdsVideoUploadToastCardUtils").DISMISS_TIMER,
              d,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              void 0,
              s != null ? s : void 0,
            )));
        } else
          c = o("AdsVideoUploadToastCardUtils").createToastCard(
            [],
            "progress",
            null,
            null,
            d,
            0,
            r("AdsVideoUploadStatus").UPLOADING,
          );
        r("AdsAddToastCardAction").dispatch(
          { dismissUseCase: "videoUpload", toastCard: c[0] },
          { line: "258", module: "AdsVideoActions.js", moduleID: i.id },
        );
      }
    }
    function g(e, t, n, a) {
      var l = String(o("WaterfallIDGenerator").generate());
      (r("VideoAdsCreationSessionStateManager").startUploadSession(l, n),
        r("AdsVideoUploadStartDataAction").dispatch(
          { accountID: n, title: e, url: t, context: a, waterfallID: l },
          { line: "276", module: "AdsVideoActions.js", moduleID: i.id },
        ));
    }
    function h(e, t, n) {
      var a = String(o("WaterfallIDGenerator").generate());
      (r("VideoAdsCreationSessionStateManager").startUploadSession(a, t),
        r("AdsVideoUploadStartDataAction").dispatch(
          { accountID: t, assetUploadSpec: e, context: n },
          { line: "295", module: "AdsVideoActions.js", moduleID: i.id },
        ));
    }
    function y(e, t, n, o) {
      (n || s(0, 2214),
        r("AdsVideoUploadStartDataAction").dispatch(
          { title: e, instagramStoryID: t, accountID: n, context: o },
          { line: "309", module: "AdsVideoActions.js", moduleID: i.id },
        ));
    }
    function C(e, t, n, o, a, l, s, u, c, d, m) {
      a != null && a.length > 0
        ? (r("AdsInterfacesLogger").logOnce({
            eventName: "ig_start_upload_unuploaded_video_ui",
            data: {
              subsequent_data: JSON.stringify({
                video_count: a.length,
                source_instagram_media_id: t,
                child_video_id: a,
              }),
            },
          }),
          a.forEach(function (a) {
            return r("AdsVideoUploadStartDataAction").dispatch(
              {
                title: e,
                sourceInstagramMediaID: t,
                accountID: n,
                context: l,
                childVideoSourceInstagramMediaID: a,
                adgroupIDs: o,
                isPartnershipAd: u,
                sponsorInstagramID: c,
                partnershipAdAdCode: d,
                selectedAudioSpec: m,
              },
              { line: "342", module: "AdsVideoActions.js", moduleID: i.id },
            );
          }))
        : (r("AdsInterfacesLogger").logOnce({
            eventName: "ig_start_upload_unuploaded_video_ui",
            data: {
              subsequent_data: JSON.stringify({
                video_count: 1,
                source_instagram_media_id: t,
              }),
            },
          }),
          r("AdsVideoUploadStartDataAction").dispatch(
            {
              title: e,
              sourceInstagramMediaID: t,
              accountID: n,
              context: l,
              adgroupIDs: o,
              isIGMediaPickerSource: s,
              isPartnershipAd: u,
              sponsorInstagramID: c,
              partnershipAdAdCode: d,
              selectedAudioSpec: m,
            },
            { line: "365", module: "AdsVideoActions.js", moduleID: i.id },
          ));
    }
    function b(e, t) {
      r("AdsInstagramVideoUploadStartDataAction").dispatch(
        { url: e, accountID: t },
        { line: "384", module: "AdsVideoActions.js", moduleID: i.id },
      );
    }
    function v(e) {
      r("AdsVideoUploadCancelDataAction").dispatch(
        typeof e == "string" ? { uploaderKey: e } : {},
        { line: "391", module: "AdsVideoActions.js", moduleID: i.id },
      );
    }
    function S(e) {
      e.forEach(function (e, t) {
        return v(t);
      });
    }
    function R(e) {
      e.forEach(function (e) {
        return v(e);
      });
    }
    function L() {
      r("AdsVideoUploadFinishDataAction").dispatch(
        {},
        { line: "410", module: "AdsVideoActions.js", moduleID: i.id },
      );
    }
    function E(e) {
      r("AdsVideoFilterDataAction").dispatch(
        { query: e },
        { line: "414", module: "AdsVideoActions.js", moduleID: i.id },
      );
    }
    function k(e) {
      r("logVultureJSDeadCodeUsage")("AdsVideoActions.sort");
    }
    function I(e) {
      r("AdsVideoSearchDataAction").dispatch(
        { query: e === "" ? void 0 : e },
        { line: "424", module: "AdsVideoActions.js", moduleID: i.id },
      );
    }
    ((l.openSelector = e),
      (l.videoBatchLoaded = u),
      (l.videoBatchLoadError = c),
      (l.videoClicked = d),
      (l.startVideoEdit = m),
      (l.startUpload = p),
      (l.startSphericalReUpload = _),
      (l.startUploadWithFileMap = f),
      (l.startImport = g),
      (l.startImportFromAssetSpec = h),
      (l.startInstagramImport = y),
      (l.startSourceInstagramMediaImport = C),
      (l.startInstagramVideoLibraryImport = b),
      (l.cancelUpload = v),
      (l.cancelUploadWithFileMap = S),
      (l.cancelUploads = R),
      (l.finishUpload = L),
      (l.filter = E),
      (l.sort = k),
      (l.search = I));
  },
  98,
);

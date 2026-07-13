__d(
  "WAWebWindowsHybridBridge.v2610",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2610",
    "WAWebWindowsHybridBridgeAbProps.v2610",
    "WAWebWindowsHybridBridgeAdv.v2610",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2610",
    "WAWebWindowsHybridBridgeConnection.v2610",
    "WAWebWindowsHybridBridgeContacts.v2610",
    "WAWebWindowsHybridBridgeDebugFeatures.v2610",
    "WAWebWindowsHybridBridgeLinksPreview.v2610",
    "WAWebWindowsHybridBridgeMediaFiles.v2610",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2610",
    "WAWebWindowsHybridBridgeNativeAppState.v2610",
    "WAWebWindowsHybridBridgePictures.v2610",
    "WAWebWindowsHybridBridgePreferences.v2610",
    "WAWebWindowsHybridBridgeRateTheApp.v2610",
    "WAWebWindowsHybridBridgeScalingControl.v2610",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2610",
    "WAWebWindowsHybridBridgeSharesheet.v2610",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2610",
    "WAWebWindowsHybridBridgeTouchpadFix.v2610",
    "WAWebWindowsHybridBridgeVoip.v2610",
    "WAWebWindowsHybridBridgeWam.v2610",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2610",
          ).WindowsHybridBridgeAbProps_v2610)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2610",
          ).WindowsHybridBridgeWam_v2610)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2610",
          ).WindowsHybridBridgePreferences_v2610)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2610",
          ).WindowsHybridBridgeScalingControl_v2610)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2610",
          ).WindowsHybridBridgePictures_v2610)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2610",
            ).WindowsHybridBridgeDebugFeatures_v2610)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2610",
          ).VoipWinRTBridge_v2610)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2610",
          ).WAWebWindowsHybridBridgeRateTheApp_v2610)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2610",
          ).WindowsHybridBridgeConnection_v2610)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2610",
          ).WindowsHybridBridgeTouchpadFix_v2610)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2610",
          ).WindowsHybridBridgeLinksPreview_v2610)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2610",
            ).WindowsHybridBridgeContacts_v2610)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2610",
            ).WindowsHybridBridgeContacts_v2610)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2610",
          ).WAWebWindowsHybridBridgeMediaFiles_v2610)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2610",
          ).WAWebWindowsHybridBridgeSharesheet_v2610)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2610",
          ).WindowsHybridAppActivationBridge_v2610)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2610",
          ).WindowsHybridBridgeNativeAppState_v2610)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2610",
          ).WindowsHybridBridgeSystemIntegrations_v2610)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2610",
          ).WindowsHybridBridgeBrowserExtensions_v2610)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2610",
          ).WindowsHybridBridgeSeamlessMigration_v2610)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2610",
          ).WindowsHybridBridgeMediaTranscoder_v2610)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2610",
          ).WindowsHybridBridgeAdv_v2610)(e.hostObjects.AdvBridge)),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2610 = e;
  },
  98,
);

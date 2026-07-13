__d(
  "WAWebWindowsHybridBridge.v2605",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2605",
    "WAWebWindowsHybridBridgeAbProps.v2605",
    "WAWebWindowsHybridBridgeAdv.v2605",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2605",
    "WAWebWindowsHybridBridgeConnection.v2605",
    "WAWebWindowsHybridBridgeContacts.v2605",
    "WAWebWindowsHybridBridgeDebugFeatures.v2605",
    "WAWebWindowsHybridBridgeLinksPreview.v2605",
    "WAWebWindowsHybridBridgeMediaFiles.v2605",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2605",
    "WAWebWindowsHybridBridgeNativeAppState.v2605",
    "WAWebWindowsHybridBridgePictures.v2605",
    "WAWebWindowsHybridBridgePreferences.v2605",
    "WAWebWindowsHybridBridgeRateTheApp.v2605",
    "WAWebWindowsHybridBridgeScalingControl.v2605",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2605",
    "WAWebWindowsHybridBridgeSharesheet.v2605",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2605",
    "WAWebWindowsHybridBridgeTouchpadFix.v2605",
    "WAWebWindowsHybridBridgeVoip.v2605",
    "WAWebWindowsHybridBridgeWam.v2605",
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
            "WAWebWindowsHybridBridgeAbProps.v2605",
          ).WindowsHybridBridgeAbProps_v2605)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2605",
          ).WindowsHybridBridgeWam_v2605)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2605",
          ).WindowsHybridBridgePreferences_v2605)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2605",
          ).WindowsHybridBridgeScalingControl_v2605)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2605",
          ).WindowsHybridBridgePictures_v2605)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2605",
            ).WindowsHybridBridgeDebugFeatures_v2605)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2605",
          ).VoipWinRTBridge_v2605)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2605",
          ).WAWebWindowsHybridBridgeRateTheApp_v2605)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2605",
          ).WindowsHybridBridgeConnection_v2605)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2605",
          ).WindowsHybridBridgeTouchpadFix_v2605)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2605",
          ).WindowsHybridBridgeLinksPreview_v2605)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2605",
            ).WindowsHybridBridgeContacts_v2605)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2605",
            ).WindowsHybridBridgeContacts_v2605)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2605",
          ).WAWebWindowsHybridBridgeMediaFiles_v2605)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2605",
          ).WAWebWindowsHybridBridgeSharesheet_v2605)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2605",
          ).WindowsHybridAppActivationBridge_v2605)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2605",
          ).WindowsHybridBridgeNativeAppState_v2605)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2605",
          ).WindowsHybridBridgeSystemIntegrations_v2605)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2605",
          ).WindowsHybridBridgeBrowserExtensions_v2605)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2605",
          ).WindowsHybridBridgeSeamlessMigration_v2605)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2605",
          ).WindowsHybridBridgeMediaTranscoder_v2605)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2605",
          ).WindowsHybridBridgeAdv_v2605)(e.hostObjects.AdvBridge)),
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
    l.WindowsHybridBridge_v2605 = e;
  },
  98,
);

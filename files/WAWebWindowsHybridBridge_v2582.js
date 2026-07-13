__d(
  "WAWebWindowsHybridBridge.v2582",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2582",
    "WAWebWindowsHybridBridgeAbProps.v2582",
    "WAWebWindowsHybridBridgeAdv.v2582",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2582",
    "WAWebWindowsHybridBridgeConnection.v2582",
    "WAWebWindowsHybridBridgeContacts.v2582",
    "WAWebWindowsHybridBridgeDebugFeatures.v2582",
    "WAWebWindowsHybridBridgeLinksPreview.v2582",
    "WAWebWindowsHybridBridgeMediaFiles.v2582",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2582",
    "WAWebWindowsHybridBridgeNativeAppState.v2582",
    "WAWebWindowsHybridBridgePictures.v2582",
    "WAWebWindowsHybridBridgePreferences.v2582",
    "WAWebWindowsHybridBridgeRateTheApp.v2582",
    "WAWebWindowsHybridBridgeScalingControl.v2582",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2582",
    "WAWebWindowsHybridBridgeSharesheet.v2582",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2582",
    "WAWebWindowsHybridBridgeTouchpadFix.v2582",
    "WAWebWindowsHybridBridgeVoip.v2582",
    "WAWebWindowsHybridBridgeWam.v2582",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((this.serverEncKeySaltBridge = null),
          (e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2582",
          ).WindowsHybridBridgeAbProps_v2582)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2582",
          ).WindowsHybridBridgeWam_v2582)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2582",
          ).WindowsHybridBridgePreferences_v2582)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2582",
          ).WindowsHybridBridgeScalingControl_v2582)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2582",
          ).WindowsHybridBridgePictures_v2582)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2582",
            ).WindowsHybridBridgeDebugFeatures_v2582)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2582",
          ).VoipWinRTBridge_v2582)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2582",
          ).WAWebWindowsHybridBridgeRateTheApp_v2582)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2582",
          ).WindowsHybridBridgeConnection_v2582)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2582",
          ).WindowsHybridBridgeTouchpadFix_v2582)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2582",
          ).WindowsHybridBridgeLinksPreview_v2582)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2582",
            ).WindowsHybridBridgeContacts_v2582)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2582",
            ).WindowsHybridBridgeContacts_v2582)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2582",
          ).WAWebWindowsHybridBridgeMediaFiles_v2582)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2582",
          ).WAWebWindowsHybridBridgeSharesheet_v2582)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2582",
          ).WindowsHybridAppActivationBridge_v2582)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2582",
          ).WindowsHybridBridgeNativeAppState_v2582)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2582",
          ).WindowsHybridBridgeSystemIntegrations_v2582)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2582",
          ).WindowsHybridBridgeBrowserExtensions_v2582)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2582",
          ).WindowsHybridBridgeSeamlessMigration_v2582)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2582",
          ).WindowsHybridBridgeMediaTranscoder_v2582)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2582",
          ).WindowsHybridBridgeAdv_v2582)(e.hostObjects.AdvBridge)),
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
    l.WindowsHybridBridge_v2582 = e;
  },
  98,
);

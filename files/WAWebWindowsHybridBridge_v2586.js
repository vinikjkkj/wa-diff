__d(
  "WAWebWindowsHybridBridge.v2586",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2586",
    "WAWebWindowsHybridBridgeAbProps.v2586",
    "WAWebWindowsHybridBridgeAdv.v2586",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2586",
    "WAWebWindowsHybridBridgeConnection.v2586",
    "WAWebWindowsHybridBridgeContacts.v2586",
    "WAWebWindowsHybridBridgeDebugFeatures.v2586",
    "WAWebWindowsHybridBridgeLinksPreview.v2586",
    "WAWebWindowsHybridBridgeMediaFiles.v2586",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2586",
    "WAWebWindowsHybridBridgeNativeAppState.v2586",
    "WAWebWindowsHybridBridgePictures.v2586",
    "WAWebWindowsHybridBridgePreferences.v2586",
    "WAWebWindowsHybridBridgeRateTheApp.v2586",
    "WAWebWindowsHybridBridgeScalingControl.v2586",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2586",
    "WAWebWindowsHybridBridgeSharesheet.v2586",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2586",
    "WAWebWindowsHybridBridgeTouchpadFix.v2586",
    "WAWebWindowsHybridBridgeVoip.v2586",
    "WAWebWindowsHybridBridgeWam.v2586",
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
            "WAWebWindowsHybridBridgeAbProps.v2586",
          ).WindowsHybridBridgeAbProps_v2586)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2586",
          ).WindowsHybridBridgeWam_v2586)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2586",
          ).WindowsHybridBridgePreferences_v2586)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2586",
          ).WindowsHybridBridgeScalingControl_v2586)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2586",
          ).WindowsHybridBridgePictures_v2586)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2586",
            ).WindowsHybridBridgeDebugFeatures_v2586)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2586",
          ).VoipWinRTBridge_v2586)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2586",
          ).WAWebWindowsHybridBridgeRateTheApp_v2586)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2586",
          ).WindowsHybridBridgeConnection_v2586)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2586",
          ).WindowsHybridBridgeTouchpadFix_v2586)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2586",
          ).WindowsHybridBridgeLinksPreview_v2586)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2586",
            ).WindowsHybridBridgeContacts_v2586)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2586",
            ).WindowsHybridBridgeContacts_v2586)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2586",
          ).WAWebWindowsHybridBridgeMediaFiles_v2586)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2586",
          ).WAWebWindowsHybridBridgeSharesheet_v2586)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2586",
          ).WindowsHybridAppActivationBridge_v2586)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2586",
          ).WindowsHybridBridgeNativeAppState_v2586)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2586",
          ).WindowsHybridBridgeSystemIntegrations_v2586)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2586",
          ).WindowsHybridBridgeBrowserExtensions_v2586)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2586",
          ).WindowsHybridBridgeSeamlessMigration_v2586)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2586",
          ).WindowsHybridBridgeMediaTranscoder_v2586)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2586",
          ).WindowsHybridBridgeAdv_v2586)(e.hostObjects.AdvBridge)),
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
    l.WindowsHybridBridge_v2586 = e;
  },
  98,
);

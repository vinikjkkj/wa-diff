__d(
  "WAWebWindowsHybridBridge.v2611",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2611",
    "WAWebWindowsHybridBridgeAbProps.v2611",
    "WAWebWindowsHybridBridgeAdv.v2611",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2611",
    "WAWebWindowsHybridBridgeConnection.v2611",
    "WAWebWindowsHybridBridgeContacts.v2611",
    "WAWebWindowsHybridBridgeDebugFeatures.v2611",
    "WAWebWindowsHybridBridgeLinksPreview.v2611",
    "WAWebWindowsHybridBridgeMediaFiles.v2611",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2611",
    "WAWebWindowsHybridBridgeNativeAppState.v2611",
    "WAWebWindowsHybridBridgePictures.v2611",
    "WAWebWindowsHybridBridgePreferences.v2611",
    "WAWebWindowsHybridBridgeRateTheApp.v2611",
    "WAWebWindowsHybridBridgeScalingControl.v2611",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2611",
    "WAWebWindowsHybridBridgeSharesheet.v2611",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2611",
    "WAWebWindowsHybridBridgeTouchpadFix.v2611",
    "WAWebWindowsHybridBridgeVoip.v2611",
    "WAWebWindowsHybridBridgeWam.v2611",
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
            "WAWebWindowsHybridBridgeAbProps.v2611",
          ).WindowsHybridBridgeAbProps_v2611)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2611",
          ).WindowsHybridBridgeWam_v2611)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2611",
          ).WindowsHybridBridgePreferences_v2611)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2611",
          ).WindowsHybridBridgeScalingControl_v2611)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2611",
          ).WindowsHybridBridgePictures_v2611)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2611",
            ).WindowsHybridBridgeDebugFeatures_v2611)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2611",
          ).VoipWinRTBridge_v2611)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2611",
          ).WAWebWindowsHybridBridgeRateTheApp_v2611)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2611",
          ).WindowsHybridBridgeConnection_v2611)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2611",
          ).WindowsHybridBridgeTouchpadFix_v2611)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2611",
          ).WindowsHybridBridgeLinksPreview_v2611)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2611",
            ).WindowsHybridBridgeContacts_v2611)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2611",
            ).WindowsHybridBridgeContacts_v2611)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2611",
          ).WAWebWindowsHybridBridgeMediaFiles_v2611)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2611",
          ).WAWebWindowsHybridBridgeSharesheet_v2611)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2611",
          ).WindowsHybridAppActivationBridge_v2611)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2611",
          ).WindowsHybridBridgeNativeAppState_v2611)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2611",
          ).WindowsHybridBridgeSystemIntegrations_v2611)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2611",
          ).WindowsHybridBridgeBrowserExtensions_v2611)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2611",
          ).WindowsHybridBridgeSeamlessMigration_v2611)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2611",
          ).WindowsHybridBridgeMediaTranscoder_v2611)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2611",
          ).WindowsHybridBridgeAdv_v2611)(e.hostObjects.AdvBridge)),
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
    l.WindowsHybridBridge_v2611 = e;
  },
  98,
);

__d(
  "WAWebWindowsHybridBridge.v2585",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2585",
    "WAWebWindowsHybridBridgeAbProps.v2585",
    "WAWebWindowsHybridBridgeAdv.v2585",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2585",
    "WAWebWindowsHybridBridgeConnection.v2585",
    "WAWebWindowsHybridBridgeContacts.v2585",
    "WAWebWindowsHybridBridgeDebugFeatures.v2585",
    "WAWebWindowsHybridBridgeLinksPreview.v2585",
    "WAWebWindowsHybridBridgeMediaFiles.v2585",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2585",
    "WAWebWindowsHybridBridgeNativeAppState.v2585",
    "WAWebWindowsHybridBridgePictures.v2585",
    "WAWebWindowsHybridBridgePreferences.v2585",
    "WAWebWindowsHybridBridgeRateTheApp.v2585",
    "WAWebWindowsHybridBridgeScalingControl.v2585",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2585",
    "WAWebWindowsHybridBridgeSharesheet.v2585",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2585",
    "WAWebWindowsHybridBridgeTouchpadFix.v2585",
    "WAWebWindowsHybridBridgeVoip.v2585",
    "WAWebWindowsHybridBridgeWam.v2585",
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
            "WAWebWindowsHybridBridgeAbProps.v2585",
          ).WindowsHybridBridgeAbProps_v2585)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2585",
          ).WindowsHybridBridgeWam_v2585)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2585",
          ).WindowsHybridBridgePreferences_v2585)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2585",
          ).WindowsHybridBridgeScalingControl_v2585)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2585",
          ).WindowsHybridBridgePictures_v2585)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2585",
            ).WindowsHybridBridgeDebugFeatures_v2585)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2585",
          ).VoipWinRTBridge_v2585)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2585",
          ).WAWebWindowsHybridBridgeRateTheApp_v2585)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2585",
          ).WindowsHybridBridgeConnection_v2585)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2585",
          ).WindowsHybridBridgeTouchpadFix_v2585)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2585",
          ).WindowsHybridBridgeLinksPreview_v2585)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2585",
            ).WindowsHybridBridgeContacts_v2585)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2585",
            ).WindowsHybridBridgeContacts_v2585)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2585",
          ).WAWebWindowsHybridBridgeMediaFiles_v2585)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2585",
          ).WAWebWindowsHybridBridgeSharesheet_v2585)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2585",
          ).WindowsHybridAppActivationBridge_v2585)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2585",
          ).WindowsHybridBridgeNativeAppState_v2585)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2585",
          ).WindowsHybridBridgeSystemIntegrations_v2585)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2585",
          ).WindowsHybridBridgeBrowserExtensions_v2585)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2585",
          ).WindowsHybridBridgeSeamlessMigration_v2585)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2585",
          ).WindowsHybridBridgeMediaTranscoder_v2585)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2585",
          ).WindowsHybridBridgeAdv_v2585)(e.hostObjects.AdvBridge)),
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
    l.WindowsHybridBridge_v2585 = e;
  },
  98,
);

__d(
  "WAWebWindowsHybridBridge.v2603",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2603",
    "WAWebWindowsHybridBridgeAbProps.v2603",
    "WAWebWindowsHybridBridgeAdv.v2603",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2603",
    "WAWebWindowsHybridBridgeConnection.v2603",
    "WAWebWindowsHybridBridgeContacts.v2603",
    "WAWebWindowsHybridBridgeDebugFeatures.v2603",
    "WAWebWindowsHybridBridgeLinksPreview.v2603",
    "WAWebWindowsHybridBridgeMediaFiles.v2603",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2603",
    "WAWebWindowsHybridBridgeNativeAppState.v2603",
    "WAWebWindowsHybridBridgePictures.v2603",
    "WAWebWindowsHybridBridgePreferences.v2603",
    "WAWebWindowsHybridBridgeRateTheApp.v2603",
    "WAWebWindowsHybridBridgeScalingControl.v2603",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2603",
    "WAWebWindowsHybridBridgeSharesheet.v2603",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2603",
    "WAWebWindowsHybridBridgeTouchpadFix.v2603",
    "WAWebWindowsHybridBridgeVoip.v2603",
    "WAWebWindowsHybridBridgeWam.v2603",
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
            "WAWebWindowsHybridBridgeAbProps.v2603",
          ).WindowsHybridBridgeAbProps_v2603)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2603",
          ).WindowsHybridBridgeWam_v2603)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2603",
          ).WindowsHybridBridgePreferences_v2603)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2603",
          ).WindowsHybridBridgeScalingControl_v2603)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2603",
          ).WindowsHybridBridgePictures_v2603)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2603",
            ).WindowsHybridBridgeDebugFeatures_v2603)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2603",
          ).VoipWinRTBridge_v2603)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2603",
          ).WAWebWindowsHybridBridgeRateTheApp_v2603)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2603",
          ).WindowsHybridBridgeConnection_v2603)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2603",
          ).WindowsHybridBridgeTouchpadFix_v2603)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2603",
          ).WindowsHybridBridgeLinksPreview_v2603)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2603",
            ).WindowsHybridBridgeContacts_v2603)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2603",
            ).WindowsHybridBridgeContacts_v2603)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2603",
          ).WAWebWindowsHybridBridgeMediaFiles_v2603)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2603",
          ).WAWebWindowsHybridBridgeSharesheet_v2603)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2603",
          ).WindowsHybridAppActivationBridge_v2603)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2603",
          ).WindowsHybridBridgeNativeAppState_v2603)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2603",
          ).WindowsHybridBridgeSystemIntegrations_v2603)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2603",
          ).WindowsHybridBridgeBrowserExtensions_v2603)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2603",
          ).WindowsHybridBridgeSeamlessMigration_v2603)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2603",
          ).WindowsHybridBridgeMediaTranscoder_v2603)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2603",
          ).WindowsHybridBridgeAdv_v2603)(e.hostObjects.AdvBridge)),
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
    l.WindowsHybridBridge_v2603 = e;
  },
  98,
);

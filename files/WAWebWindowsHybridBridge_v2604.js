__d(
  "WAWebWindowsHybridBridge.v2604",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2604",
    "WAWebWindowsHybridBridgeAbProps.v2604",
    "WAWebWindowsHybridBridgeAdv.v2604",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2604",
    "WAWebWindowsHybridBridgeConnection.v2604",
    "WAWebWindowsHybridBridgeContacts.v2604",
    "WAWebWindowsHybridBridgeDebugFeatures.v2604",
    "WAWebWindowsHybridBridgeLinksPreview.v2604",
    "WAWebWindowsHybridBridgeMediaFiles.v2604",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2604",
    "WAWebWindowsHybridBridgeNativeAppState.v2604",
    "WAWebWindowsHybridBridgePictures.v2604",
    "WAWebWindowsHybridBridgePreferences.v2604",
    "WAWebWindowsHybridBridgeRateTheApp.v2604",
    "WAWebWindowsHybridBridgeScalingControl.v2604",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2604",
    "WAWebWindowsHybridBridgeSharesheet.v2604",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2604",
    "WAWebWindowsHybridBridgeTouchpadFix.v2604",
    "WAWebWindowsHybridBridgeVoip.v2604",
    "WAWebWindowsHybridBridgeWam.v2604",
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
            "WAWebWindowsHybridBridgeAbProps.v2604",
          ).WindowsHybridBridgeAbProps_v2604)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2604",
          ).WindowsHybridBridgeWam_v2604)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2604",
          ).WindowsHybridBridgePreferences_v2604)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2604",
          ).WindowsHybridBridgeScalingControl_v2604)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2604",
          ).WindowsHybridBridgePictures_v2604)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2604",
            ).WindowsHybridBridgeDebugFeatures_v2604)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2604",
          ).VoipWinRTBridge_v2604)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2604",
          ).WAWebWindowsHybridBridgeRateTheApp_v2604)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2604",
          ).WindowsHybridBridgeConnection_v2604)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2604",
          ).WindowsHybridBridgeTouchpadFix_v2604)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2604",
          ).WindowsHybridBridgeLinksPreview_v2604)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2604",
            ).WindowsHybridBridgeContacts_v2604)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2604",
            ).WindowsHybridBridgeContacts_v2604)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2604",
          ).WAWebWindowsHybridBridgeMediaFiles_v2604)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2604",
          ).WAWebWindowsHybridBridgeSharesheet_v2604)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2604",
          ).WindowsHybridAppActivationBridge_v2604)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2604",
          ).WindowsHybridBridgeNativeAppState_v2604)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2604",
          ).WindowsHybridBridgeSystemIntegrations_v2604)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2604",
          ).WindowsHybridBridgeBrowserExtensions_v2604)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2604",
          ).WindowsHybridBridgeSeamlessMigration_v2604)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2604",
          ).WindowsHybridBridgeMediaTranscoder_v2604)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2604",
          ).WindowsHybridBridgeAdv_v2604)(e.hostObjects.AdvBridge)),
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
    l.WindowsHybridBridge_v2604 = e;
  },
  98,
);

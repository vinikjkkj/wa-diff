__d(
  "WAWebWindowsHybridBridge.v2645",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2645",
    "WAWebWindowsHybridBridgeAbProps.v2645",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2645",
    "WAWebWindowsHybridBridgeConnection.v2645",
    "WAWebWindowsHybridBridgeContacts.v2645",
    "WAWebWindowsHybridBridgeDebugFeatures.v2645",
    "WAWebWindowsHybridBridgeLinksPreview.v2645",
    "WAWebWindowsHybridBridgeMediaFiles.v2645",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2645",
    "WAWebWindowsHybridBridgeMetaConfig.v2645",
    "WAWebWindowsHybridBridgeNativeAppState.v2645",
    "WAWebWindowsHybridBridgeOds.v2645",
    "WAWebWindowsHybridBridgePictures.v2645",
    "WAWebWindowsHybridBridgePreferences.v2645",
    "WAWebWindowsHybridBridgeRateTheApp.v2645",
    "WAWebWindowsHybridBridgeRingtone.v2645",
    "WAWebWindowsHybridBridgeScalingControl.v2645",
    "WAWebWindowsHybridBridgeSharesheet.v2645",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2645",
    "WAWebWindowsHybridBridgeTouchpadFix.v2645",
    "WAWebWindowsHybridBridgeVoip.v2645",
    "WAWebWindowsHybridBridgeWam.v2645",
    "WAWebWindowsStartupWebTimings",
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
            "WAWebWindowsHybridBridgeAbProps.v2645",
          ).WindowsHybridBridgeAbProps_v2645)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2645",
          ).WindowsHybridBridgeWam_v2645)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2645",
          ).WindowsHybridBridgePreferences_v2645)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2645",
          ).WindowsHybridBridgeScalingControl_v2645)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2645",
          ).WindowsHybridBridgeOds_v2645)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2645",
          ).WindowsHybridBridgePictures_v2645)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2645",
            ).WindowsHybridBridgeDebugFeatures_v2645)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2645",
          ).VoipWinRTBridge_v2645)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2645",
          ).WAWebWindowsHybridBridgeRateTheApp_v2645)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2645",
          ).WindowsHybridBridgeConnection_v2645)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2645",
          ).WindowsHybridBridgeTouchpadFix_v2645)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2645",
          ).WindowsHybridBridgeLinksPreview_v2645)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2645",
            ).WindowsHybridBridgeContacts_v2645)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2645",
            ).WindowsHybridBridgeContacts_v2645)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2645",
          ).WAWebWindowsHybridBridgeMediaFiles_v2645)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2645",
          ).WAWebWindowsHybridBridgeSharesheet_v2645)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2645",
          ).WindowsHybridAppActivationBridge_v2645)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2645",
          ).WindowsHybridBridgeNativeAppState_v2645)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2645",
          ).WindowsHybridBridgeSystemIntegrations_v2645)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2645",
          ).WindowsHybridBridgeBrowserExtensions_v2645)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2645",
          ).WindowsHybridBridgeMediaTranscoder_v2645)(e, L));
        var E = e.hostObjects.RingtoneBridge;
        E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2645",
          ).WindowsHybridBridgeRingtone_v2645)(E));
        var k = e.hostObjects.MetaConfigBridge;
        (k != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2645",
          ).WindowsHybridBridgeMetaConfig_v2645)(k)),
          this.metaConfig.initialize()),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY),
          o("WAWebWindowsStartupWebTimings").markWindowsBridgeReady());
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
    l.WindowsHybridBridge_v2645 = e;
  },
  98,
);

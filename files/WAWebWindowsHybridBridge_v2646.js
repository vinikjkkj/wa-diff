__d(
  "WAWebWindowsHybridBridge.v2646",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2646",
    "WAWebWindowsHybridBridgeAbProps.v2646",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2646",
    "WAWebWindowsHybridBridgeConnection.v2646",
    "WAWebWindowsHybridBridgeContacts.v2646",
    "WAWebWindowsHybridBridgeDebugFeatures.v2646",
    "WAWebWindowsHybridBridgeLinksPreview.v2646",
    "WAWebWindowsHybridBridgeMediaFiles.v2646",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2646",
    "WAWebWindowsHybridBridgeMetaConfig.v2646",
    "WAWebWindowsHybridBridgeNativeAppState.v2646",
    "WAWebWindowsHybridBridgeOds.v2646",
    "WAWebWindowsHybridBridgePictures.v2646",
    "WAWebWindowsHybridBridgePreferences.v2646",
    "WAWebWindowsHybridBridgeRateTheApp.v2646",
    "WAWebWindowsHybridBridgeRingtone.v2646",
    "WAWebWindowsHybridBridgeScalingControl.v2646",
    "WAWebWindowsHybridBridgeSharesheet.v2646",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2646",
    "WAWebWindowsHybridBridgeTouchpadFix.v2646",
    "WAWebWindowsHybridBridgeVoip.v2646",
    "WAWebWindowsHybridBridgeWam.v2646",
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
            "WAWebWindowsHybridBridgeAbProps.v2646",
          ).WindowsHybridBridgeAbProps_v2646)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2646",
          ).WindowsHybridBridgeWam_v2646)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2646",
          ).WindowsHybridBridgePreferences_v2646)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2646",
          ).WindowsHybridBridgeScalingControl_v2646)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2646",
          ).WindowsHybridBridgeOds_v2646)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2646",
          ).WindowsHybridBridgePictures_v2646)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2646",
            ).WindowsHybridBridgeDebugFeatures_v2646)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2646",
          ).VoipWinRTBridge_v2646)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2646",
          ).WAWebWindowsHybridBridgeRateTheApp_v2646)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2646",
          ).WindowsHybridBridgeConnection_v2646)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2646",
          ).WindowsHybridBridgeTouchpadFix_v2646)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2646",
          ).WindowsHybridBridgeLinksPreview_v2646)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2646",
            ).WindowsHybridBridgeContacts_v2646)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2646",
            ).WindowsHybridBridgeContacts_v2646)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2646",
          ).WAWebWindowsHybridBridgeMediaFiles_v2646)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2646",
          ).WAWebWindowsHybridBridgeSharesheet_v2646)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2646",
          ).WindowsHybridAppActivationBridge_v2646)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2646",
          ).WindowsHybridBridgeNativeAppState_v2646)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2646",
          ).WindowsHybridBridgeSystemIntegrations_v2646)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2646",
          ).WindowsHybridBridgeBrowserExtensions_v2646)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2646",
          ).WindowsHybridBridgeMediaTranscoder_v2646)(e, L));
        var E = e.hostObjects.RingtoneBridge;
        E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2646",
          ).WindowsHybridBridgeRingtone_v2646)(E));
        var k = e.hostObjects.MetaConfigBridge;
        (k != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2646",
          ).WindowsHybridBridgeMetaConfig_v2646)(k)),
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
    l.WindowsHybridBridge_v2646 = e;
  },
  98,
);

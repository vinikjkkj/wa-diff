__d(
  "WAWebWindowsHybridBridge.v2644",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2644",
    "WAWebWindowsHybridBridgeAbProps.v2644",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2644",
    "WAWebWindowsHybridBridgeConnection.v2644",
    "WAWebWindowsHybridBridgeContacts.v2644",
    "WAWebWindowsHybridBridgeDebugFeatures.v2644",
    "WAWebWindowsHybridBridgeLinksPreview.v2644",
    "WAWebWindowsHybridBridgeMediaFiles.v2644",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2644",
    "WAWebWindowsHybridBridgeMetaConfig.v2644",
    "WAWebWindowsHybridBridgeNativeAppState.v2644",
    "WAWebWindowsHybridBridgeOds.v2644",
    "WAWebWindowsHybridBridgePictures.v2644",
    "WAWebWindowsHybridBridgePreferences.v2644",
    "WAWebWindowsHybridBridgeRateTheApp.v2644",
    "WAWebWindowsHybridBridgeRingtone.v2644",
    "WAWebWindowsHybridBridgeScalingControl.v2644",
    "WAWebWindowsHybridBridgeSharesheet.v2644",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2644",
    "WAWebWindowsHybridBridgeTouchpadFix.v2644",
    "WAWebWindowsHybridBridgeVoip.v2644",
    "WAWebWindowsHybridBridgeWam.v2644",
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
            "WAWebWindowsHybridBridgeAbProps.v2644",
          ).WindowsHybridBridgeAbProps_v2644)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2644",
          ).WindowsHybridBridgeWam_v2644)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2644",
          ).WindowsHybridBridgePreferences_v2644)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2644",
          ).WindowsHybridBridgeScalingControl_v2644)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2644",
          ).WindowsHybridBridgeOds_v2644)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2644",
          ).WindowsHybridBridgePictures_v2644)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2644",
            ).WindowsHybridBridgeDebugFeatures_v2644)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2644",
          ).VoipWinRTBridge_v2644)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2644",
          ).WAWebWindowsHybridBridgeRateTheApp_v2644)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2644",
          ).WindowsHybridBridgeConnection_v2644)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2644",
          ).WindowsHybridBridgeTouchpadFix_v2644)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2644",
          ).WindowsHybridBridgeLinksPreview_v2644)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2644",
            ).WindowsHybridBridgeContacts_v2644)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2644",
            ).WindowsHybridBridgeContacts_v2644)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2644",
          ).WAWebWindowsHybridBridgeMediaFiles_v2644)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2644",
          ).WAWebWindowsHybridBridgeSharesheet_v2644)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2644",
          ).WindowsHybridAppActivationBridge_v2644)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2644",
          ).WindowsHybridBridgeNativeAppState_v2644)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2644",
          ).WindowsHybridBridgeSystemIntegrations_v2644)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2644",
          ).WindowsHybridBridgeBrowserExtensions_v2644)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2644",
          ).WindowsHybridBridgeMediaTranscoder_v2644)(e, L));
        var E = e.hostObjects.RingtoneBridge;
        E != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2644",
          ).WindowsHybridBridgeRingtone_v2644)(E));
        var k = e.hostObjects.MetaConfigBridge;
        (k != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2644",
          ).WindowsHybridBridgeMetaConfig_v2644)(k)),
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
    l.WindowsHybridBridge_v2644 = e;
  },
  98,
);

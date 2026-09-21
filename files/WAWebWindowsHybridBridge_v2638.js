__d(
  "WAWebWindowsHybridBridge.v2638",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2638",
    "WAWebWindowsHybridBridgeAbProps.v2638",
    "WAWebWindowsHybridBridgeAdv.v2638",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2638",
    "WAWebWindowsHybridBridgeConnection.v2638",
    "WAWebWindowsHybridBridgeContacts.v2638",
    "WAWebWindowsHybridBridgeDebugFeatures.v2638",
    "WAWebWindowsHybridBridgeLinksPreview.v2638",
    "WAWebWindowsHybridBridgeMediaFiles.v2638",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2638",
    "WAWebWindowsHybridBridgeMetaConfig.v2638",
    "WAWebWindowsHybridBridgeNativeAppState.v2638",
    "WAWebWindowsHybridBridgeOds.v2638",
    "WAWebWindowsHybridBridgePictures.v2638",
    "WAWebWindowsHybridBridgePreferences.v2638",
    "WAWebWindowsHybridBridgeRateTheApp.v2638",
    "WAWebWindowsHybridBridgeRingtone.v2638",
    "WAWebWindowsHybridBridgeScalingControl.v2638",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2638",
    "WAWebWindowsHybridBridgeSharesheet.v2638",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2638",
    "WAWebWindowsHybridBridgeTouchpadFix.v2638",
    "WAWebWindowsHybridBridgeVoip.v2638",
    "WAWebWindowsHybridBridgeWam.v2638",
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
            "WAWebWindowsHybridBridgeAbProps.v2638",
          ).WindowsHybridBridgeAbProps_v2638)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2638",
          ).WindowsHybridBridgeWam_v2638)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2638",
          ).WindowsHybridBridgePreferences_v2638)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2638",
          ).WindowsHybridBridgeScalingControl_v2638)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2638",
          ).WindowsHybridBridgeOds_v2638)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2638",
          ).WindowsHybridBridgePictures_v2638)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2638",
            ).WindowsHybridBridgeDebugFeatures_v2638)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2638",
          ).VoipWinRTBridge_v2638)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2638",
          ).WAWebWindowsHybridBridgeRateTheApp_v2638)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2638",
          ).WindowsHybridBridgeConnection_v2638)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2638",
          ).WindowsHybridBridgeTouchpadFix_v2638)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2638",
          ).WindowsHybridBridgeLinksPreview_v2638)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2638",
            ).WindowsHybridBridgeContacts_v2638)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2638",
            ).WindowsHybridBridgeContacts_v2638)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2638",
          ).WAWebWindowsHybridBridgeMediaFiles_v2638)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2638",
          ).WAWebWindowsHybridBridgeSharesheet_v2638)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2638",
          ).WindowsHybridAppActivationBridge_v2638)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2638",
          ).WindowsHybridBridgeNativeAppState_v2638)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2638",
          ).WindowsHybridBridgeSystemIntegrations_v2638)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2638",
          ).WindowsHybridBridgeBrowserExtensions_v2638)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2638",
          ).WindowsHybridBridgeSeamlessMigration_v2638)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2638",
          ).WindowsHybridBridgeMediaTranscoder_v2638)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2638",
          ).WindowsHybridBridgeAdv_v2638)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2638",
          ).WindowsHybridBridgeRingtone_v2638)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2638",
          ).WindowsHybridBridgeMetaConfig_v2638)(I)),
          this.metaConfig.initialize()),
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
    l.WindowsHybridBridge_v2638 = e;
  },
  98,
);

__d(
  "WAWebWindowsHybridBridge.v2635",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2635",
    "WAWebWindowsHybridBridgeAbProps.v2635",
    "WAWebWindowsHybridBridgeAdv.v2635",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2635",
    "WAWebWindowsHybridBridgeConnection.v2635",
    "WAWebWindowsHybridBridgeContacts.v2635",
    "WAWebWindowsHybridBridgeDebugFeatures.v2635",
    "WAWebWindowsHybridBridgeLinksPreview.v2635",
    "WAWebWindowsHybridBridgeMediaFiles.v2635",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2635",
    "WAWebWindowsHybridBridgeMetaConfig.v2635",
    "WAWebWindowsHybridBridgeNativeAppState.v2635",
    "WAWebWindowsHybridBridgeOds.v2635",
    "WAWebWindowsHybridBridgePictures.v2635",
    "WAWebWindowsHybridBridgePreferences.v2635",
    "WAWebWindowsHybridBridgeRateTheApp.v2635",
    "WAWebWindowsHybridBridgeRingtone.v2635",
    "WAWebWindowsHybridBridgeScalingControl.v2635",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2635",
    "WAWebWindowsHybridBridgeSharesheet.v2635",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2635",
    "WAWebWindowsHybridBridgeTouchpadFix.v2635",
    "WAWebWindowsHybridBridgeVoip.v2635",
    "WAWebWindowsHybridBridgeWam.v2635",
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
            "WAWebWindowsHybridBridgeAbProps.v2635",
          ).WindowsHybridBridgeAbProps_v2635)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2635",
          ).WindowsHybridBridgeWam_v2635)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2635",
          ).WindowsHybridBridgePreferences_v2635)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2635",
          ).WindowsHybridBridgeScalingControl_v2635)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2635",
          ).WindowsHybridBridgeOds_v2635)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2635",
          ).WindowsHybridBridgePictures_v2635)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2635",
            ).WindowsHybridBridgeDebugFeatures_v2635)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2635",
          ).VoipWinRTBridge_v2635)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2635",
          ).WAWebWindowsHybridBridgeRateTheApp_v2635)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2635",
          ).WindowsHybridBridgeConnection_v2635)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2635",
          ).WindowsHybridBridgeTouchpadFix_v2635)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2635",
          ).WindowsHybridBridgeLinksPreview_v2635)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2635",
            ).WindowsHybridBridgeContacts_v2635)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2635",
            ).WindowsHybridBridgeContacts_v2635)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2635",
          ).WAWebWindowsHybridBridgeMediaFiles_v2635)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2635",
          ).WAWebWindowsHybridBridgeSharesheet_v2635)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2635",
          ).WindowsHybridAppActivationBridge_v2635)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2635",
          ).WindowsHybridBridgeNativeAppState_v2635)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2635",
          ).WindowsHybridBridgeSystemIntegrations_v2635)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2635",
          ).WindowsHybridBridgeBrowserExtensions_v2635)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2635",
          ).WindowsHybridBridgeSeamlessMigration_v2635)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2635",
          ).WindowsHybridBridgeMediaTranscoder_v2635)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2635",
          ).WindowsHybridBridgeAdv_v2635)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2635",
          ).WindowsHybridBridgeRingtone_v2635)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2635",
          ).WindowsHybridBridgeMetaConfig_v2635)(I)),
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
    l.WindowsHybridBridge_v2635 = e;
  },
  98,
);

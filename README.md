# Sectora Wallet

Self-custody multichain wallet for Ethereum, BNB Chain, Robinhood Chain and Solana.

Live at **https://getsectora.app** (beta).

- Your 12-word recovery phrase is created on your device and never leaves it.
- The wallet is encrypted on your device with your password.
- Same EVM address as MetaMask and Trust Wallet, same Solana address as Phantom (standard BIP39 / BIP44 paths).
- No scripts from other sites: every library is served from this site.
  - `ethers.umd.min.js`: ethers v6.15.0, pinned with Subresource Integrity.
  - `jsqr.js`: jsQR 1.4.0 (Apache-2.0), QR code reader, loaded only when you scan.
  - `wc.js`: WalletConnect (Reown WalletKit 1.6.0, `@walletconnect/core` 2.25.0), loaded only when you connect an app.

Beta software: start with small amounts.

Sectora will never ask for your recovery phrase. Official project site: https://sectoraorg.com

## Notices

WalletConnect: Portions © 2025 Reown, Inc. All Rights Reserved. Used under the WalletConnect Community License, see `wc-license.md`.

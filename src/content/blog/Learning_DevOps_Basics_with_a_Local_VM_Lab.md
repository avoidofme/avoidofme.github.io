---
title: 'Learning DevOps Basics with a Local VM Lab'
description: 'How I learned DevOps basics by locking myself out of my own server'
pubDate: 'Aug 21 2026'
heroImage: '../../assets/learn-basic-devops.png'
---

Today I tried something new. After learning how to operate Podman, I took a step further and built a local infrastructure lab. My goal was just to train my system administration and automation skills without having to pay for a cloud provider yet.

## 1. Installing Debian minimal on QEMU

Usually I use VirtualBox, but today I chose to try QEMU to get a more native feeling since I'm on Linux. I installed the Debian minimal (netinst) image, not the cloud version. In the Debian installer, I only selected SSH server and standard system utilities to keep it minimal. For networking, I used port forwarding, so I can SSH from my host machine directly into the VM — `localhost:2222` forwards to port `22` inside the VM.

## 2. Setup SSH key authentication

I disabled password authentication entirely and relied on public key authentication instead. I pulled my public key directly from GitHub via `https://github.com/avoidofme.keys` and placed it in `~/.ssh/authorized_keys`.

## 3. Firewall with nftables

This is where I learned something I might never forget. I had set up a firewall ruleset that was syntactically valid, but I forgot to add `accept` to one rule — the one for SSH. As a result, my SSH connection got silently blocked (not rejected, just dropped). The lesson: `nft -c` only checks syntax, it doesn't guarantee the logic actually works — you still need to test manually.

## 4. Automation with Ansible

Next, I tried Ansible. I had heard about it many times, so I was excited to finally try it — and it genuinely helped with installing things. I just needed to write a task once and reuse it many times, thanks to its declarative nature (I just describe the state I want, not the steps to get there).

## 5. Learning Terraform + libvirt

Finally, I tried Terraform to provision VMs automatically through libvirt, since I'm using QEMU. I only tried the `plan`, `apply`, and `destroy` commands — Terraform shows exactly what it's going to do before applying, and the plan output is very readable.

### And then

I still have a lot left to learn — going deeper into all of this, integrating Terraform and Ansible, and I still want to try Kubernetes, which I didn't get to today. Maybe that's for another post.

That wraps up today's learning. Honestly, I learned a lot, and it was genuinely fun.

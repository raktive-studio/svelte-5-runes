<script>
    let { name = "no name", avatar, followers = 0 } = $props();
</script>

<div>
  <img src={avatar} alt={name} />
  <h2>{name}</h2>
  <p>{followers} followers</p>
</div>
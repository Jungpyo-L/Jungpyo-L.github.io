module Jekyll
  class PublicationStatusGenerator < Generator
    safe true
    priority :low

    def generate(site)
      bib_file = site.config.dig('scholar', 'bibliography') || 'papers.bib'
      bib_path = File.join(site.source, '_bibliography', bib_file)
      return unless File.exist?(bib_path)

      statuses = Hash.new(0)
      File.read(bib_path).scan(/^\s*status\s*=\s*\{([^}]+)\}/) do |match|
        statuses[match[0].strip] += 1
      end

      site.data['publication_statuses'] = statuses
    end
  end
end
